import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/profileCompo.css'
import { FaAngleRight } from "react-icons/fa6";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { RiAdvertisementLine } from "react-icons/ri";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { PiBookmarksLight } from "react-icons/pi";
import { RiDraftLine } from "react-icons/ri";
import { TiPlus } from "react-icons/ti";

const Profile = () => {
    return (
        <main className='profile-compo'>
            <section className="user-box">
                <div className='uImage-box'><img src="../../public/spaces-img/spaceimg2.jpg" alt="profile image" /></div>
                <div className='uName-box'>
                    <h3>UserName</h3>
                    <button><FaAngleRight /></button>
                </div>
            </section>
            <section className="tool-box">
                <ul>
                    <li><button><span><HiOutlineChatBubbleLeftRight /></span><span>Messages</span></button></li>
                    <li><button><span><RiAdvertisementLine /></span><span>Create Ad</span></button></li>
                    <li><button><span><MdOutlineAttachMoney /></span><span>Monetization</span></button></li>
                    <li><button><span><IoStatsChartOutline /></span><span>Your content & stats</span></button></li>
                    <li><button><span><PiBookmarksLight /></span><span>Bookmarks</span></button></li>
                    <li><button><span><RiDraftLine /></span><span>Drafts</span></button></li>
                    <li><button><span><TiPlus /></span><span>Try Quora+</span></button></li>
                </ul>
            </section>
            <section className="setting-box">
                <ul>
                    <li><button ><span>Dark mode</span><span className='mode'>Auto</span></button></li>
                    <li><button>Settings</button></li>
                    <li><button>Languages</button></li>
                    <li><button>Help</button></li>
                    <li><button>Logout</button></li>
                </ul>
            </section>
            <footer>
                <ul>
                    <li><Link to="">About</Link></li>
                    <li>&middot;</li>
                    <li><Link to="">Careers</Link></li>
                    <li>&middot;</li>
                    <li><Link to="">Terms</Link></li>
                    <li>&middot;</li>
                    <li><Link to="">Privacy</Link></li>
                    <li>&middot;</li>
                    <li><Link to="">Acceptable Use</Link></li>
                    <li>&middot;</li>
                    <li><Link to="">Advertise</Link></li>
                    <li>&middot;</li>
                    <li><Link to="">Press</Link></li>
                    <li>&middot;</li>
                    <li><Link to="">Your Ad Choices</Link></li>
                    <li>&middot;</li>
                    <li><Link to="">Grievance Officer</Link></li>
                </ul>
            </footer>
        </main>
    )
}

export default Profile