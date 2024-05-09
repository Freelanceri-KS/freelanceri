import "./blogDetails.scss"
import blogimg from "../../assets/images/section1imgmain.jpg"
import blog1 from "../../assets/blogs/blog1cover.jpeg"
import blog2 from "../../assets/blogs/blog2.jpg";
import blog3 from "../../assets/blogs/blog3.jpg";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
const blogs = [
    {
        title: "Getting started with Freelanceri", body: ` In today's dynamic business landscape, traditional recruitment methods are being left behind by innovative platforms like ours. At Freelanceri, we're not just another job board; we're transforming the way businesses connect with professionals through cutting-edge AI technology.
    <br /><br />
    Our platform goes beyond simple job postings. With a vast database of registered professionals, we utilize AI algorithms to precisely match each company with the perfect candidate for their unique needs. This ensures a seamless and efficient recruitment process, saving time and resources for both parties involved.
    <br /><br />

    But our services don't stop there. In addition to recruitment, we offer comprehensive project management solutions, ensuring tasks and projects are executed flawlessly. Through our consulting services, businesses gain access to tailored guidance and industry expertise, enabling them to achieve optimal performance and growth.
    <br /><br />

    What sets us apart is our commitment to integrating advanced AI features into our platform. This allows us to provide unparalleled efficiency and accuracy in matching companies with professionals, driving productivity and success.
    <br /><br />

    Moreover, our project management service empowers businesses to streamline operations and foster innovation by creating development branches. This ensures agility and adaptability in today's fast-paced business environment.

    <br /><br />
    Furthermore, our dedicated consulting company branch serves as a hub for specialized expertise, offering strategic guidance and tailored solutions to address each client's unique challenges.
    <br /><br />

    For professionals, we offer training programs including coding skills development, ensuring they stay competitive in an ever-evolving market.`, id: 1, image: blog1, shortdsc: "In today's dynamic business landscape, traditional recruitment methods are being left behind by innovative platforms like ours. At Freelanceri, we're not just another job board; we're transforming the way businesses connect with professionals through cutting-edge AI technology."
    },
    {
        title: "Freelanceri for professionals",
        body: `Freelanceri is dedicated to empowering professionals with the tools and resources they need to succeed in today's competitive market. Through our comprehensive training programs and workshops, we provide individuals with the skills and knowledge necessary to thrive in their respective industries.
    <br/><br/>
    Our training programs cover a wide range of topics, from technical skills development to industry-specific knowledge. Whether you're looking to enhance your coding skills or gain insights into the latest market trends, we have a program tailored to your needs.
    <br/><br/>
    But we don't just stop at training. We also offer opportunities for professionals to enter the market and showcase their talents. Through our platform, individuals can connect with businesses and clients looking for their specific expertise, opening doors to new opportunities and projects.
    <br/><br/>At Freelanceri, we believe in empowering professionals to take control of their careers and achieve their full potential. Join us and unlock a world of opportunities in the global market.`,
        id: 2, image: blog2, shortdsc: "Freelanceri is dedicated to empowering professionals with the tools and resources they need to succeed in today's competitive market,through our comprehensive training programs and workshops."
    },
    {
        title: "How to get your first project", body: `
    Starting your professional journey is both thrilling and daunting. Whether you're freelancing, launching a business, or fresh out of school, landing your first project is a crucial step that shapes your career path. In this blog post, we'll explore why securing that initial project is vital and how you can navigate this milestone with confidence.
    
    Importance of Getting the First Project:
    Securing your first project is significant for several reasons:
    <br/><br/>
    - Building Confidence: It boosts your self-belief and validates your skills.
    - Establishing Credibility: It showcases your abilities and builds trust with future clients or employers.
    - Creating Momentum: It kickstarts your journey and opens doors to more opportunities.
    - Learning Experience: It provides hands-on learning and helps you grow personally and professionally.
    
    How We Help You Find Your First Project:
    Navigating the path to your first project is a collaborative effort. Here's how we support you:
    
    - Guidance and Resources: We provide tools to help you stand out, like crafting a compelling portfolio.
    - Networking Opportunities: Connect with potential clients, collaborators, and mentors at our events.
    - Skill Enhancement: Stay ahead with our workshops and programs designed to sharpen your skills.
    - Supportive Community: Join a network of like-minded individuals to share experiences and seek advice.
    
    Conclusion:
    Securing your first project is more than just a milestone; it's a testament to your dedication and passion. With our support and your determination, you can confidently embark on this journey, paving the way for a fulfilling and successful career ahead. Remember, every step counts, and you're on the right path to realizing your goals.`, id: 3, image: blog3, shortdsc: "The most important bit, the first project."
    }
];

const BlogDetails = () => {
    const { blogId } = useParams();
    const selectedBlog = blogs.find(blog => blog.id.toString() === blogId);

    if (!selectedBlog) {
        return <div className="blog-details">Blog not found</div>;
    }
    return (
        <div className="blog-details">
            <div className="container">
                <h2 className="blog-details-title">Blog title</h2>
                <img src={blog1} alt="Blog Image" className="blog-img" />
                <p className="blog-details-content">

                </p>
            </div>
        </div>
    );
}

export default BlogDetails;