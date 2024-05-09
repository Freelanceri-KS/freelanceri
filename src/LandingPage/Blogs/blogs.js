import "./blogs.scss"
import mainimg from "../../assets/images/section1imgmain.jpg"
import { useNavigate } from "react-router-dom";
import blog1 from "../../assets/blogs/blog1cover.jpeg"
import blog2 from "../../assets/blogs/blog2.jpg";
import blog3 from "../../assets/blogs/blog3.jpg";
import blog4 from "../../assets/blogs/blog4.png"


const Blogs = () => {
    const navigate = useNavigate();
    const handleBlogClick = (blogId) => {
        navigate(`/blog-details/${blogId}`);
    };
    return (
        <div className="blogs">
            <div className="container blogs-wrapper">
                <a href="https://medium.com/@platforma.freelanceri/in-todays-dynamic-business-landscape-traditional-recruitment-methods-are-being-left-behind-by-a42c45a7333f" target="_blank" style={{ textDecoration: "none" }}>
                    <div className="main-article" style={{ cursor: "pointer" }}>
                        <img src={blog4} alt="Article" className="main-article-img" />
                        <div className="article-tags">
                            <div className="first-tag">
                                <p>For businesses</p>
                            </div>
                            {/* <p className="first-tag-p">For Businesses</p>
                        <p className="first-tag-p">• 10/04/2024</p> */}
                        </div>
                        <div className="article-preview">
                            <h1 className="article-preview-title">Getting started with Freelanceri</h1>
                            <p className="article-preview-description">In today’s dynamic business landscape, traditional recruitment methods are being left behind by innovative platforms like ours. At Freelanceri, we’re not just another job board; we’re transforming the way businesses connect with professionals through cutting-edge AI technology.</p>
                        </div>
                    </div>
                </a>
                <div className="grid-articles mb-5">
                    <a href="https://medium.com/@platforma.freelanceri/freelanceri-for-professionals-77d43420cd9c" target="_blank" style={{ textDecoration: "none" }}>
                        <div className="grid-article-item" style={{ cursor: "pointer" }}>
                            <img src={blog2} alt="article-grid" className="article-img" />
                            <h4 className="grid-article-title">Freelanceri for professionals</h4>
                            <p className="grid-article-paragraph">Freelanceri is dedicated to empowering professionals with the tools and resources they need to succeed in today's competitive market,through our comprehensive training programs and workshops.</p>
                        </div>
                    </a>
                    <a href="https://medium.com/@platforma.freelanceri/how-to-get-your-first-project-1d0dd2bbdbdb" target="_blank" style={{ textDecoration: "none" }}>
                        <div className="grid-article-item" style={{ cursor: "pointer" }} >
                            <img src={blog3} alt="article-grid" className="article-img" />
                            <h4 className="grid-article-title">How to get your first project</h4>
                            <p className="grid-article-paragraph">The most important bit, your first project.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}


export default Blogs;