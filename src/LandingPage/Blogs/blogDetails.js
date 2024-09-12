import "./blogDetails.scss"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "../../axios"
import { toast } from "react-toastify";

const BlogDetails = () => {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState(null);
    const [email, setEmail] = useState(null);
    const createMail = () => {
        const payload = {
            email: email
        }
        axios.post(`/home-email`, payload)
            .then((response) => {
                toast.success("Email has been saved, our team will contact you shortly.");
                console.log(response.data);
                setEmail("");
            })
            .catch((error) => {
                console.error('Error creating mail:', error);
            });
    };
    const getBlog = () => {
        axios.get(`/blogs/${id}`)
            .then((response) => {
                console.log(response.data);
                setBlogDetail(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getBlog();
    }, [])

    return (
        <div className="blog-details">
            <div className="container">
                <div className="blog-header">
                    <h2 className="blog-details-title">{blogDetail && blogDetail.title}</h2>
                    <img src={blogDetail && blogDetail.cover} alt="Blog Image" className="blog-img" />
                </div>
                <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: blogDetail && blogDetail.content }}
                />

                <div className="subscribe mt-5 mb-5">
                    <div className="sub-wrapper">
                        <h4 className="swh4">Stay informed with our latest<br /> updates and insights</h4>
                        <div className="email-sub mt-4">
                            <input type="text" name="email" id="email" placeholder="Enter your email" className="es-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className="es-btn" style={{ cursor: 'pointer' }} onClick={createMail}>
                                Join us
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;