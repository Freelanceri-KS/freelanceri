import React from "react";
import { Link } from "react-router-dom";

export const JobPost = ({ info, id }) => {
  // Add id to props
  return (
    <div className="d-flex justify-content-center mt-5">
      <div class="frame-144">
        <div class="frame-1442">
          <div class="frame-139">
            <div class="frame-129">
              <div class="mask-group">
                <div class="ellipse-1"></div>
                <img
                  class="unsplash-z-9-lbm-ejy-yj-u"
                  src={info.image}
                  alt="Job"
                />
              </div>
              <div class="frame-38">
                <div class="social-media">{info.position}</div>
                <div class="by-fjolla-berisha">
                  <span>
                    <span class="by-fjolla-berisha-span">By:</span>
                    <span class="by-fjolla-berisha-span2">
                      {info.creatorName}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="frame-132">
              <div class="frame-130">
                <div class="location">Location</div>
                <div class="prishtine">{info.location}</div>
              </div>
              <div class="frame-131">
                <div class="type">Type</div>
                <div class="full-time">{info.fulltime}</div>
              </div>
              <div class="frame-1322">
                <div class="category">Category</div>
                <div class="graphic-designer">{info.category}</div>
              </div>
            </div>
            <svg
              class="bookmark-8"
              width="36"
              height="35"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.3918 21.6193L13.237 16.5087L6.08218 21.6193V5.26543C6.08218 4.72326 6.29756 4.2033 6.68093 3.81993C7.0643 3.43657 7.58426 3.22119 8.12642 3.22119H18.3476C18.8898 3.22119 19.4097 3.43657 19.7931 3.81993C20.1765 4.2033 20.3918 4.72326 20.3918 5.26543V21.6193Z"
                fill="#455BEF"
              />
            </svg>
          </div>
          <div class="frame-142">
            <div class="bodyarea">
              <span>
                <span class="description">{info.description}</span>
                <span class="show-more">Show more</span>
              </span>
            </div>
          </div>
        </div>
        <div class="frame-141">
          <div class="frame-30">
            <div class="kerkoj">Kerkoj</div>
            <div class="_1-freelancer">{info.amount} freelancer</div>
          </div>
          <div class="frame-62">
            <div class="afati">Afati</div>
            <div class="_3-dite">{info.deadline}</div>
          </div>
          <div class="frame-63">
            <div class="bugjeti">Bugjeti</div>
            <div class="_350">{info.budget}</div>
          </div>
          <Link to="/detailsJob" className="frame-67">
            <div class="view">View</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
