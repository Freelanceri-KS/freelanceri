import "./blogs.scss"
import mainimg from "../../assets/images/section1imgmain.jpg"
import { useNavigate } from "react-router-dom";

const Blogs = () => {
    const navigate = useNavigate();
    return (
        <div className="blogs">
            <div className="container blogs-wrapper">
                <div className="main-article" onClick={() => navigate('/blog-details')}>
                    <img src={mainimg} alt="Article" className="main-article-img" />
                    <div className="article-tags">
                        <div className="first-tag">
                            <p>Featured</p>
                        </div>
                        <p className="first-tag-p">For Businesses</p>
                        <p className="first-tag-p">• 10/04/2024</p>
                    </div>
                    <div className="article-preview">
                        <h1 className="article-preview-title">Getting started with Freelanceri</h1>
                        <p className="article-preview-description">In today's interconnected world, the concept of work has transcended the traditional confines of office spaces and fixed schedules. With the rise of digital platforms like Freelanceri, individuals now have access to a vast array of global work opportunities right at their fingertips. Whether you're a seasoned professional looking to expand your horizons.</p>
                    </div>
                </div>
                <div className="grid-articles">
                    <div className="grid-article-item">
                        <img src={mainimg} alt="article-grid" className="article-img" />
                        <h4 className="grid-article-title">Article title</h4>
                        <p className="grid-article-paragraph">In the world of freelancing, reputation is everything. Delivering high-quality work in a timely manner is crucial to building a positive reputation on Freelanceri.</p>
                    </div>
                    <div className="grid-article-item">
                        <img src={mainimg} alt="article-grid" className="article-img" />
                        <h4 className="grid-article-title">Article title</h4>
                        <p className="grid-article-paragraph">In the world of freelancing, reputation is everything. Delivering high-quality work in a timely manner is crucial to building a positive reputation on Freelanceri.</p>
                    </div>
                    <div className="grid-article-item">
                        <img src={mainimg} alt="article-grid" className="article-img" />
                        <h4 className="grid-article-title">Article title</h4>
                        <p className="grid-article-paragraph">In the world of freelancing, reputation is everything. Delivering high-quality work in a timely manner is crucial to building a positive reputation on Freelanceri.</p>
                    </div>
                    <div className="grid-article-item">
                        <img src={mainimg} alt="article-grid" className="article-img" />
                        <h4 className="grid-article-title">Article title</h4>
                        <p className="grid-article-paragraph">In the world of freelancing, reputation is everything. Delivering high-quality work in a timely manner is crucial to building a positive reputation on Freelanceri.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Blogs;