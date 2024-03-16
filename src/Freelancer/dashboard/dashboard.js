import './dashboard.scss'
import Logo from "../../assets/images/logo.png"
import Star from "../../assets/images/star.png"


const FreelancerDashboard = () => {
    return (
        <div className="freelancer-dashboard">
            <p className='freelancer-dashboard-title'>Welcome,<span style={{ fontWeight: "600" }}> Kujtim Gjokaj!</span></p>
            <div className="freelancer-dashboard-wrap">
                <div className="freelancer-dashboard-main">
                    <div className="freelancer-dashboard-main-earnings">
                        <div className="fdme-title">
                            <h4 className='fdme-h3'>Total Net Earnings</h4>
                            <h6 className='fdme-h6'>View all</h6>
                        </div>
                        <div className="horiz-barrier"></div>
                        <div className="fdme-stats">
                            <div className="fdme-stat-item">
                                <h6>Total Net Earnings this week</h6>
                                <h4 className='fdme-stat-item-value'>$600</h4>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="fdme-stat-item">
                                <h6>Total Net Earnings this month</h6>
                                <h4 className='fdme-stat-item-value'>$1,800</h4>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="fdme-stat-item">
                                <h6>Total Net Earnings this year</h6>
                                <h4 className='fdme-stat-item-value'>$4,000</h4>
                            </div>
                            <div className="vert-barrier"></div>
                            <div className="fdme-stat-item">
                                <h6>Total Net Earnings all time</h6>
                                <h4 className='fdme-stat-item-value'>$11,600</h4>
                            </div>

                        </div>
                    </div>
                    <div className="freelancer-dashboard-main-proposals">
                        <div className="fdmp-head">
                            <h4>Proposals Sent</h4>
                            <h6 className='fdmp-head-h6'>View all</h6>
                        </div>
                        <div className="horiz-barrier"></div>
                        <div className="fdmp-options">
                            <h6 className='fdmp-single-opt'>Active</h6>
                            <h6 className='fdmp-single-opt'>Closed</h6>
                        </div>
                        <div className="horiz-barrier-2"></div>
                        <div className="single-proposal">
                            <div className="single-proposal-data">
                                <h6 className='spd-h6'>E-commerce - Wordpress Developer</h6>
                                <p className='spd-p'>Started on: April 20, 2024</p>
                                <p className='spd-p'>Open-Ticket:#44503</p>
                                <div className="proposal-status">
                                    <p>Submitted</p>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="freelancer-dashboard-main-clients">
                        <div className="fdmc-head">
                            <h4>Clients</h4>
                            <h6 className='fdmc-head-h6'>View all</h6>
                        </div>
                        <div className="horiz-barrier"></div>
                        <div className="fdmc-options">
                            <h6 className='fdmc-single-opt'>Active</h6>
                            <h6 className='fdmc-single-opt'>Closed</h6>
                        </div>
                        <div className="horiz-barrier-2"></div>
                        <div className="clients-grid">
                            <div class="grid-item">
                                <div className="client-info">
                                    <img src={Logo} alt='company-image' height={70} width={70} className='client-logo' />
                                    <div className="client-info-data">
                                        <h5>Freelanceri</h5>
                                        <p>Kujtim Gjokaj</p>
                                        <p>Prishtina, Kosova</p>
                                    </div>
                                </div>
                                <div className="message-option-client">
                                    <p>Message</p>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="client-info">
                                    <img src={Logo} alt='company-image' height={70} width={70} className='client-logo' />
                                    <div className="client-info-data">
                                        <h5>Freelanceri</h5>
                                        <p>Kujtim Gjokaj</p>
                                        <p>Prishtina, Kosova</p>
                                    </div>
                                </div>
                                <div className="message-option-client">
                                    <p>Message</p>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="client-info">
                                    <img src={Logo} alt='company-image' height={70} width={70} className='client-logo' />
                                    <div className="client-info-data">
                                        <h5>Freelanceri</h5>
                                        <p>Kujtim Gjokaj</p>
                                        <p>Prishtina, Kosova</p>
                                    </div>
                                </div>
                                <div className="message-option-client">
                                    <p>Message</p>
                                </div>
                            </div>
                            <div class="grid-item">
                                <div className="client-info">
                                    <img src={Logo} alt='company-image' height={70} width={70} className='client-logo' />
                                    <div className="client-info-data">
                                        <h5>Freelanceri</h5>
                                        <p>Kujtim Gjokaj</p>
                                        <p>Prishtina, Kosova</p>
                                    </div>
                                </div>
                                <div className="message-option-client">
                                    <p>Message</p>
                                </div>
                            </div>
                            <div class="grid-item">  <div className="client-info">
                                <img src={Logo} alt='company-image' height={70} width={70} className='client-logo' />
                                <div className="client-info-data">
                                    <h5>Freelanceri</h5>
                                    <p>Kujtim Gjokaj</p>
                                    <p>Prishtina, Kosova</p>
                                </div>
                            </div>
                                <div className="message-option-client">
                                    <p>Message</p>
                                </div></div>
                            <div class="grid-item">
                                <div className="client-info">
                                    <img src={Logo} alt='company-image' height={70} width={70} className='client-logo' />
                                    <div className="client-info-data">
                                        <h5>Freelanceri</h5>
                                        <p>Kujtim Gjokaj</p>
                                        <p>Prishtina, Kosova</p>
                                    </div>
                                </div>
                                <div className="message-option-client">
                                    <p>Message</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="freelancer-dashboard-main-reviews">
                        <div className="fdmr-head">
                            <h4>Reviews</h4>
                            <h6 className='fdmr-head-h6'>View all</h6>
                        </div>
                        <div className="horiz-barrier"></div>
                        <div className="reviews-list">
                            <div className="reviews-list-main">
                                <div className="review-item">
                                    <div className="review-item-head">
                                        <img src={Logo} alt='company-image' height={60} width={60} className='client-logo' />
                                        <div className="review-item-head-data">
                                            <h6>Freelanceri</h6>
                                            <p>Kujtim Gjokaj • Prishtina, Kosovo</p>
                                        </div>
                                    </div>
                                    <div className="review-item-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                        </p>
                                    </div>
                                </div>
                                <div className="horiz-barrier"></div>
                                <div className="review-item">
                                    <div className="review-item-head">
                                        <img src={Logo} alt='company-image' height={60} width={60} className='client-logo' />
                                        <div className="review-item-head-data">
                                            <h6>Freelanceri</h6>
                                            <p>Kujtim Gjokaj • Prishtina, Kosovo</p>
                                        </div>
                                    </div>
                                    <div className="review-item-body">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="reviews-list-side">
                                <div className="rls-main">
                                    <h5 className='rls-main-h5'>5.0</h5>
                                    <div className="stars">
                                        <img src={Star} alt="star" className='reviews-list-side-stars-star' />
                                        <img src={Star} alt="star" className='reviews-list-side-stars-star' />
                                        <img src={Star} alt="star" className='reviews-list-side-stars-star' />
                                        <img src={Star} alt="star" className='reviews-list-side-stars-star' />
                                        <img src={Star} alt="star" className='reviews-list-side-stars-star' />
                                    </div>
                                </div>
                                <div className="horiz-line"></div>
                                <div className="rls-ratings">
                                    <div className="stars-count">
                                        <p>5 stars</p>
                                        <p>32</p>
                                    </div>
                                    <div className="stars-count">
                                        <p>4 stars</p>
                                        <p>2</p>
                                    </div>
                                    <div className="stars-count">
                                        <p>3 stars</p>
                                        <p>0</p>
                                    </div>
                                    <div className="stars-count">
                                        <p>2 stars</p>
                                        <p>0</p>
                                    </div>
                                    <div className="stars-count">
                                        <p>1 Star</p>
                                        <p>0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="freelancer-dashboard-side">
                    <div className="freelancer-dashboard-side-container">
                        <div className="fdsc-head">
                            <h3>Blogs</h3>
                        </div>
                        <div className="horiz-barrier"></div>
                        <div className="fdsc-article">
                            <div className="fdsc-article-nr">
                                <p>1</p>
                            </div>
                            <h5>Getting started with Freelanceri</h5>
                            <p>The new window of global work opportunitites</p>
                            <p className='fdsc-article-link'>Read more</p>

                        </div>
                        <div className="horiz-barrier-article"></div>
                        <div className="fdsc-article">
                            <div className="fdsc-article-nr">
                                <p>2</p>
                            </div>
                            <h5>How to get your first project</h5>
                            <p>The new window of global work opportunitites</p>
                            <p className='fdsc-article-link'>Read more</p>
                        </div>
                        <div className="horiz-barrier-article"></div>
                        <div className="fdsc-article">
                            <div className="fdsc-article-nr">
                                <p>3</p>
                            </div>
                            <h5>Freelanceri for businesses</h5>
                            <p>The new window of global work opportunitites</p>
                            <p className='fdsc-article-link'>Read more</p>
                        </div>
                        <div className="horiz-barrier-article"></div>
                        <div className="fdsc-article">
                            <div className="fdsc-article-nr">
                                <p>4</p>
                            </div>
                            <h5>Being yourselves boss</h5>
                            <p>The new window of global work opportunitites</p>
                            <p className='fdsc-article-link'>Read more</p>
                        </div>
                    </div>
                    <div className="freelancer-dashboard-side-contact">
                        <div className="fdsc-head">
                            <h3>Contact</h3>
                        </div>
                        <div className="horiz-barrier"></div>
                        <div className="fdsc-body">
                            <p>Contact Freelanceri support 7 days a week. We are serious about your Growth</p>
                            <div className="horiz-barrier-contact"></div>
                            <p className='fdsc-body-p'>Email: <span style={{ color: "#455bef", fontWeight: '500' }}>support@freelanceri-ks.com</span></p>
                            <div className="horiz-barrier-contact"></div>
                            <p className='fdsc-body-p'>Contact us and we will reach out to you soon to hear about your needs</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FreelancerDashboard;