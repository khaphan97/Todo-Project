import React from "react";
import { AiFillCamera, AiFillSliders, AiFillStar, AiOutlineComment, AiOutlineUserAdd } from "react-icons/ai";
import { Col, Row } from "reactstrap";
import profileImg from "../../../assets/images/profile-image.jpg";
import authorImg from "../../../assets/images/author.jpg";
import "./styles/HomeMain.scss";
function HomeMain(props) {
    // const { t, i18n } = useTranslation();
    return (
        <Row>
            <Col lg="12">
                <Row >
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
                                <div class="profile-author">
                                    <div class="author-content">
                                        <a class="h4 author-name" href="about.html">Jack Carter</a>
                                        <div class="country">Ontario, CA</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="10" md="9">
                            <ul class="profile-menu">
                                <li>
                                    <a class="" href="timeline.html">Timeline</a>
                                </li>
                                <li>
                                    <a class="active" href="about.html">About</a>
                                </li>
                                <li>
                                    <a class="" href="timeline-friends.html">Friends</a>
                                </li>
                                <li>
                                    <a class="" href="timeline-photos.html">Photos</a>
                                </li>
                                <li>
                                    <a class="" href="timeline-videos.html">Videos</a>
                                </li>
                            </ul>
                            <ul class="follow-detail">
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
                                    <small>22       </small>
                                </li>
                            </ul>  
                            </Col>
                        </Row>
                    </div>
                </Row>
            </Col>
        </Row>
    );
}


export default HomeMain;
