import React, { useState } from "react";
import "./sortByFilter.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { connect } from "react-redux";
import { setLang } from "../../../redux/Functions/actions";
import axios from "../../../axios";
import { CiFilter } from "react-icons/ci";



const SortBy = (props) => {
  const [expandedItem, setExpandedItem] = useState(null);
  const [category, setCategory] = useState([]);
  const getCategory = () => {
    axios
      .get("/profession")
      .then((data) => {
        setCategory(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleItemClick = (itemId) => {
    if (itemId == "category") {
      getCategory();
    }
    setExpandedItem((prevItem) => (prevItem == itemId ? null : itemId));
  };
  return (
    <>
      <div className="filter">
        <ul className="list-group expandable-list ">
          <li className="list-group-item lgi-title">
            <h2 className="lgi-h2">Sort By Filter</h2>
            <CiFilter size={30} color="#455bef" />
          </li>
          <li
            onClick={() => handleItemClick("category")}
            className={`list-group-item ${expandedItem === "category" ? <IoIosArrowUp /> : <IoIosArrowDown />

              }`}
          >
            <div className="d-flex justify-content-between align-items-center single-item">
              <h5>Category</h5>
              <span className="icon" role="button">
                {expandedItem === "category" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
            {expandedItem === "category" && (
              <div className="expanded-content mt-3">
                <div className="row gap-2">
                  {category?.map((el) => {
                    return (
                      <>
                        <button className="category-item-btn">
                          {el?.category}
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            )}
          </li>
          <li
            onClick={() => handleItemClick("item2")}
            className={`list-group-item ${expandedItem == "item2" ? "" : ""}`}
          >
            <div className="d-flex align-items-center single-item">
              <h5>Location</h5>
              <span className="icon" role="button">
                {expandedItem == "item2" ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>
            {expandedItem == "item2" && (
              <div className="expanded-content">
                <p>Expanded content for Item 2</p>
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};
// export default SortBy
const mapStateToProps = (state) => {
  return {
    language: state.data.language,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (data) => dispatch(setLang(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SortBy);
