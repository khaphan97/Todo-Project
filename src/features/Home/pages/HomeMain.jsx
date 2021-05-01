import React from "react";
import { AiFillCamera, AiFillCaretLeft, AiFillCaretRight, AiFillFacebook, AiFillGoogleCircle, AiFillInstagram, AiFillPhone, AiFillSliders, AiFillStar, AiFillTwitterCircle, AiOutlineCaretRight, AiOutlineComment, AiOutlineUser, AiOutlineUserAdd } from "react-icons/ai";
import { FaBirthdayCake, FaBriefcase, FaCertificate, FaChevronLeft, FaChevronRight, FaComment, FaEnvelope, FaMedkit, FaPlus, FaPuzzlePiece, FaRegHandshake, FaSitemap, FaTransgenderAlt, FaTrophy, FaUserPlus } from 'react-icons/fa';
import { GoMortarBoard } from 'react-icons/go';
import { RiEarthFill } from 'react-icons/ri';
import Slider from "react-slick";
import { Col, Row } from "reactstrap";
import authorImg from "../../../assets/images/author.jpg";
import badge1 from "../../../assets/images/badges/1.png";
import badge2 from "../../../assets/images/badges/2.png";
import badge3 from "../../../assets/images/badges/3.png";
import badge4 from "../../../assets/images/badges/4.png";
import badge5 from "../../../assets/images/badges/5.png";
import profileImg from "../../../assets/images/profile-image.jpg";
import "./styles/HomeMain.scss";




function HomeMain(props) {
    // const { t, i18n } = useTranslation();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };


    function NextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className='slider-next'
                onClick={onClick}
            >
                <FaChevronRight />
            </div>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className='slider-prev'
                onClick={onClick}
            >
                <FaChevronLeft />
            </div>
        );
    }

    return (
        <Row>
            <Col lg="12">
                <Row >
                    <div className="page-header mb-4">
                        <div className="user-container">
                            <div className="user-settings">
                                <div className="edit-background">
                                    <label className="fileContainer">
                                        <AiFillCamera fill="white" />
                                        <input type="file" style={{ display: 'none' }} />
                                    </label>
                                </div>
                                <div className="user-profile">
                                    <img className="w-100" src={profileImg} alt="profile" />
                                </div>
                                <div className="user-avatar">
                                    <img src={authorImg} alt="" />
                                    <label className="fileContainer">
                                        <AiFillCamera fill="black" />
                                        <input type="file" style={{ display: 'none' }} />
                                    </label>
                                </div>
                                <ul className="profile-controls">
                                    <li>
                                        <a href="/#" title="" className="controls__add-friend">
                                            <AiOutlineUserAdd fill="white" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#" title="" className="controls__favorite">
                                            <AiFillStar fill="white" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="controls__send-message" href="/#" >
                                            <AiOutlineComment fill="white" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/#" className="controls__more">
                                            <AiFillSliders fill="white" />
                                        </a>
                                        <ul className="more-dropdown">
                                            <li>
                                                <a href="/setting.html" title="">Update Profile Photo</a>
                                            </li>
                                            <li>
                                                <a href="/setting.html" title="">Update Header Photo</a>
                                            </li>
                                            <li>
                                                <a href="/setting.html" title="">Account Settings</a>
                                            </li>
                                            <li>
                                                <a href="/support-and-help.html" title="">Find Support</a>
                                            </li>
                                            <li>
                                                <a className="bad-report" href="/#" title="">Report Profile</a>
                                            </li>
                                            <li>
                                                <a href="/#" title="">Block Profile</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="user-navigation">
                            <Row>
                                <Col lg="2" md="3">
                                    <div className="profile-author">
                                        <div className="author-content">
                                            <a className="h4 author-name" href="about.html">Jack Carter</a>
                                            <div className="country">Ontario, CA</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg="10" md="9">
                                    <ul className="profile-menu">
                                        <li>
                                            <a className="" href="timeline.html">Timeline</a>
                                        </li>
                                        <li>
                                            <a className="active" href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a className="" href="timeline-friends.html">Friends</a>
                                        </li>
                                        <li>
                                            <a className="" href="timeline-photos.html">Photos</a>
                                        </li>
                                        <li>
                                            <a className="" href="timeline-videos.html">Videos</a>
                                        </li>
                                    </ul>
                                    <ul className="follow-detail">
                                        <li>
                                            <span>Posts</span>
                                            <small>101</small>
                                        </li>
                                        <li>
                                            <span>Followers</span>
                                            <small>1.3K</small>
                                        </li>
                                        <li>
                                            <span>Following</span>
                                            <small>22</small>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <Col lg="4" md="4" className="px-0">
                        <aside className="side-bar">
                            <span className="create-post">Personal Info</span>
                            <div className="personal-head">
                                <span className="f-title"><AiOutlineUser /> About Me:</span>
                                <p>
                                    Hi, I’m John Carter, I’m 36 and I work as a Digital Designer for the “dewwater” Agency in Ontario, Canada
										</p>
                                <span className="f-title"><FaBirthdayCake />Birthday:</span>
                                <p>
                                    December 17, 1985
										</p>
                                <span className="f-title"><AiFillPhone /> Phone Number:</span>
                                <p>
                                    +1-989-232435234
										</p>
                                <span className="f-title"><FaMedkit /> Blood group:</span>
                                <p>
                                    B+
										</p>
                                <span className="f-title"><FaTransgenderAlt /> Gender:</span>
                                <p>
                                    Male
										</p>
                                <span className="f-title"><RiEarthFill /> Country:</span>
                                <p>
                                    San Francisco, California, USA
										</p>
                                <span className="f-title"><FaBriefcase /> Occupation:</span>
                                <p>
                                    UI/UX Designer
										</p>
                                <span className="f-title"><FaRegHandshake /> Joined:</span>
                                <p>
                                    December 20, 2001
										</p>

                                <span className="f-title"><FaEnvelope /> Email &amp; Website:</span>
                                <p>
                                    <a href="wpkixx.com" title="">www.wpkixx.com</a> Pitnik@yourmail.com
										</p>

                            </div>
                        </aside>
                    </Col>
                    <Col lg="8" md="8">
                        <div className="central-meta">
                            <span className="create-post">General Info<a href="/#" title="">See All</a></span>
                            <Row>
                                <Col lg="6">
                                    <div className="gen-metabox">
                                        <span><FaPuzzlePiece /> Hobbies</span>
                                        <p>
                                            I like to ride the bicycle, swimming, and working out. I also like reading design magazines, and searching on internet, and also binge watching a good hollywood Movies while it’s raining outside.
                                        </p>
                                    </div>
                                    <div className="gen-metabox">
                                        <span><FaPlus /> Others Interests</span>
                                        <p>
                                            Swimming, Surfing, Uber Diving, Anime, Photography, Tattoos, Street Art.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="gen-metabox">
                                        <span><GoMortarBoard /> Education</span>
                                        <p>
                                            Master of computer science, sixteen years degree From <a href="#" title="">Oxford Uniersity, London</a>
                                        </p>
                                    </div>
                                    <div className="gen-metabox">
                                        <span><FaCertificate /> Work and experience</span>
                                        <p>
                                            Currently working in the "color hands" web development agency from the last 5 five years as <a href="#" title="">Senior UI/UX Designer</a>
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="gen-metabox no-margin">
                                        <span><FaSitemap /> Social Networks</span>
                                        <ul className="social-media">
                                            <li>
                                                <a className="facebook" href="/#" title=""><AiFillFacebook /></a>
                                            </li>
                                            <li>
                                                <a className="twitter" href="/#" title=""><AiFillTwitterCircle /></a>
                                            </li>
                                            <li>
                                                <a className="google" href="/#" title=""><AiFillGoogleCircle /></a>
                                            </li>
                                            <li>
                                                <a className="instagram" href="/#" title=""><AiFillInstagram /></a>
                                            </li>

                                        </ul>
                                    </div>
                                </Col>
                                <div className="col-lg-6">
                                    <div className="gen-metabox no-margin">
                                        <span><FaTrophy /> Badges</span>
                                        <ul className="badged">
                                            <li><img src={badge1} alt="" /></li>
                                            <li><img src={badge2} alt="" /></li>
                                            <li><img src={badge3} alt="" /></li>
                                            <li><img src={badge4} alt="" /></li>
                                            <li><img src={badge5} alt="" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </Row>
                        </div>

                        <div className="central-meta">
                            <span className="create-post">Favorite Movies &amp; TV Shows (33) <a href="/#" title="">See All</a></span>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="fav-play">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/tvplay1.jpg" alt="" />
                                        <span className="tv-play-title">Attaturk Tv Series 2017 </span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="fav-play">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/tvplay2.jpg" alt="" />
                                        <span className="tv-play-title">Thor Hollywood Movie 2017 </span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="fav-play">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/tvplay3.jpg" alt="" />
                                        <span className="tv-play-title">Spider Men 2015 </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="central-meta">
                            <span className="create-post">Friend's (320) <a href="/timeline-friends2.html" title="">See All</a></span>
                            <div className="friend-list">
                                <Slider  {...settings}>
                                    <div className="friend-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/recent3.jpg" alt="" />
                                        <div className="friend-item__details">
                                            <a href="/#" title="">Isabella</a>
                                            <span><a href="/#" title="">Emmy</a> is mutual friend</span>
                                            <ul className="add-remove-frnd">
                                                <li className="add-tofrndlist"><a className="send-mesg" href="/#" title="Send Message"><FaComment /></a></li>
                                                <li className="remove-frnd"><a href="/#" title="remove friend"><FaUserPlus /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="friend-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/recent4.jpg" alt="" />
                                        <div className="friend-item__details">
                                            <a href="/#" title="">Isabella</a>
                                            <span><a href="/#" title="">Emmy</a> is mutual friend</span>
                                            <ul className="add-remove-frnd">
                                                <li className="add-tofrndlist"><a className="send-mesg" href="/#" title="Send Message"><FaComment /></a></li>
                                                <li className="remove-frnd"><a href="/#" title="remove friend"><FaUserPlus /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="friend-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/recent5.jpg" alt="" />
                                        <div className="friend-item__details">
                                            <a href="/#" title="">Isabella</a>
                                            <span><a href="/#" title="">Emmy</a> is mutual friend</span>
                                            <ul className="add-remove-frnd">
                                                <li className="add-tofrndlist"><a className="send-mesg" href="/#" title="Send Message"><FaComment /></a></li>
                                                <li className="remove-frnd"><a href="/#" title="remove friend"><FaUserPlus /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="friend-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/recent6.jpg" alt="" />
                                        <div className="friend-item__details">
                                            <a href="/#" title="">Isabella</a>
                                            <span><a href="/#" title="">Emmy</a> is mutual friend</span>
                                            <ul className="add-remove-frnd">
                                                <li className="add-tofrndlist"><a className="send-mesg" href="/#" title="Send Message"><FaComment /></a></li>
                                                <li className="remove-frnd"><a href="/#" title="remove friend"><FaUserPlus /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="friend-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/recent1.jpg" alt="" />
                                        <div className="friend-item__details">
                                            <a href="/#" title="">Isabella</a>
                                            <span><a href="/#" title="">Emmy</a> is mutual friend</span>
                                            <ul className="add-remove-frnd">
                                                <li className="add-tofrndlist"><a className="send-mesg" href="/#" title="Send Message"><FaComment /></a></li>
                                                <li className="remove-frnd"><a href="/#" title="remove friend"><FaUserPlus /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="friend-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/recent1.jpg" alt="" />
                                        <div className="friend-item__details">
                                            <a href="/#" title="">Isabella</a>
                                            <span><a href="/#" title="">Emmy</a> is mutual friend</span>
                                            <ul className="add-remove-frnd">
                                                <li className="add-tofrndlist"><a className="send-mesg" href="/#" title="Send Message"><FaComment /></a></li>
                                                <li className="remove-frnd"><a href="/#" title="remove friend"><FaUserPlus /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className="central-meta">
                            <span class="create-post">Photos (580) <a href="timeline-photos.html" title="">See All</a></span>
                            <div className="img-list">
                                <Slider {...settings}>
                                    <a href="/#" className="img-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/photo3.jpg" alt="" />
                                        <div class="over-photo">
                                            <div class="likes heart" title="Like/Dislike">❤ <span>20</span></div>
                                            <span>20 days ago</span>
                                        </div>
                                    </a>
                                    <a href="/#" className="img-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/photo3.jpg" alt="" />
                                        <div class="over-photo">
                                            <div class="likes heart" title="Like/Dislike">❤ <span>20</span></div>
                                            <span>20 days ago</span>
                                        </div>
                                    </a>
                                    <a href="/#" className="img-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/photo3.jpg" alt="" />
                                        <div class="over-photo">
                                            <div class="likes heart" title="Like/Dislike">❤ <span>20</span></div>
                                            <span>20 days ago</span>
                                        </div>
                                    </a>
                                    <a href="/#" className="img-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/photo3.jpg" alt="" />
                                        <div class="over-photo">
                                            <div class="likes heart" title="Like/Dislike">❤ <span>20</span></div>
                                            <span>20 days ago</span>
                                        </div>
                                    </a>
                                    <a href="/#" className="img-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/photo3.jpg" alt="" />
                                        <div class="over-photo">
                                            <div class="likes heart" title="Like/Dislike">❤ <span>20</span></div>
                                            <span>20 days ago</span>
                                        </div>
                                    </a>
                                    <a href="/#" className="img-item">
                                        <img src="https://wpkixx.com/html/pitnik/images/resources/photo3.jpg" alt="" />
                                        <div class="over-photo">
                                            <div class="likes heart" title="Like/Dislike">❤ <span>20</span></div>
                                            <span>20 days ago</span>
                                        </div>
                                    </a>
                                </Slider>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row >
    );
}


export default HomeMain;
