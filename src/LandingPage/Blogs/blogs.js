import "./blogs.scss"
import { useNavigate } from "react-router-dom";
import blog2 from "../../assets/blogs/blog2.jpg";
import mainimg from "../../assets/blogs/main.jpg"
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import axios from "../../axios";
import { useEffect, useState } from "react";


const Blogs = () => {
    const navigate = useNavigate();
    const handleBlogClick = (blogId) => {
        navigate(`/blog-details/${blogId}`);
    };

    const [blogs, setBlogs] = useState(null);
    const getBlogs = () => {
        axios.get("/blogs")
            .then((response) => {
                console.log(response.data);
                setBlogs(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }


    useEffect(() => {
        getBlogs();
    }, [blogs])

    return (
        <div className="blogs">
            <div className="container blogs-wrapper">
                {blogs && blogs.length > 0 && (
                    <a href={`/blog-details/${blogs[0]._id}`} style={{ textDecoration: "none", width: "100%", justifyContent: 'center', display: 'flex' }} >
                        <div className="main-article" style={{ cursor: "pointer" }}>
                            <img src={blogs[0].cover} alt="Article" className="main-article-img" style={{ borderRadius: '10px' }} />
                            <div className="article-preview d-flex justify-content-between align-items-center">
                                <h1 className="article-preview-title">{blogs[0].title}</h1>
                                <FaRegArrowAltCircleUp size={35} className="rotate-icon" color="#909090" />
                            </div>
                            <p style={{ color: '#909090' }}>June 2, 2024</p>
                        </div>
                    </a>
                )}
                {!blogs || blogs.length === 0 && (
                    <div>No blogs available</div>
                )}
                <div className="grid-articles mb-3">
                    {blogs && blogs.slice(1).map((blog, index) => (
                        <a href={`/blog-details/${blog._id}`} key={index} style={{ textDecoration: "none" }}>
                            <div className="grid-article-item" style={{ cursor: "pointer" }}>
                                <img src={blog.cover} alt="article-grid" className="article-img" style={{ borderRadius: '10px' }} />
                                <div className="gatw d-flex justify-content-between align-items-center">
                                    <h4 className="grid-article-title">{blog.title}</h4>
                                    <FaRegArrowAltCircleUp className="rotate-icon" size={35} color="#909090" />
                                </div>
                                <p style={{ color: '#909090' }}>{blog.date}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default Blogs;