import React, { useState } from 'react'
import '../styles/navBar.css'
import QuoraLogo from '../../public/quoraLogo2.png'
import { NavLink, Link } from 'react-router-dom'
import Space from './Space'
import spaceData from '../api/spaceData.json'  // Space data import
import Profile from './Profile'
import AddQuestion from './AddQuestion';

// import react icons
import { MdHome } from "react-icons/md";
import { RiListView } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FcButtingIn } from "react-icons/fc";
import { IoGlobeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";


function NavBar() {
    const [isOpenAddQusCard, setIsOpenAddQusCard] = useState(false);
    const [isOpenPremiumCard, setIsOpenPremiumCard] = useState(false);
    const [initialCard, setInitialCard] = useState('addQusCard');
    const [disableChild, setDisableChild] = useState(false);
    const [toggleDownarrow, setToggleDownarrow] = useState(false);
    const [toggleDropDownSpace, setToggleDropDownSpace] = useState(false);
    const [toggleDropDownProfile, setToggleDropDownProfile] = useState(false);
    const [toggleDropDownLanguage, setToggleDropDownLanguage] = useState(false);


    // Handle Add Qus:
    const handleAddQus = (e) => {
        e.preventDefault();
        setIsOpenAddQusCard(!isOpenAddQusCard);
    }
    const handleCreatePost = (e) => {
        e.preventDefault();
        setIsOpenAddQusCard(!isOpenAddQusCard);
        setInitialCard('createPost');
        setToggleDownarrow(!toggleDownarrow);
    }

    //------------ Handle for Premium card ------------
    const handleOpenPremiumCard = (e) => {
        e.preventDefault();
        setIsOpenPremiumCard(!isOpenPremiumCard);
    }

    //------------- Downarrow Toggle handler ---------
    const handlerDownarrow = (e) => {
        e.preventDefault();
        setToggleDownarrow(!toggleDownarrow);
        toggleDropDownSpace ? setToggleDropDownSpace(!toggleDropDownSpace) : null;
        toggleDropDownProfile ? setToggleDropDownProfile(!toggleDropDownProfile) : null;
        toggleDropDownLanguage ? setToggleDropDownLanguage(!toggleDropDownLanguage) : null;
    }
    //------------- Space DropDown Toggle handler ---------
    const handlerDropdownSpace = (e) => {
        e.preventDefault();
        setToggleDropDownSpace(!toggleDropDownSpace);
        toggleDownarrow ? setToggleDownarrow(!toggleDownarrow) : null;
        toggleDropDownProfile ? setToggleDropDownProfile(!toggleDropDownProfile) : null;
        toggleDropDownLanguage ? setToggleDropDownLanguage(!toggleDropDownLanguage) : null;
    }

    //------------- Profile DropDown Toggle handler ---------
    const handlerDropdownProfile = (e) => {
        e.preventDefault();
        setToggleDropDownProfile(!toggleDropDownProfile);
        toggleDownarrow ? setToggleDownarrow(!toggleDownarrow) : null;
        toggleDropDownSpace ? setToggleDropDownSpace(!toggleDropDownSpace) : null;
        toggleDropDownLanguage ? setToggleDropDownLanguage(!toggleDropDownLanguage) : null;
    }

    //------------- Language DropDown Toggle handler ---------
    const handlerDropdownLanguage = (e) => {
        e.preventDefault();
        setToggleDropDownLanguage(!toggleDropDownLanguage);
        toggleDownarrow ? setToggleDownarrow(!toggleDownarrow) : null;
        toggleDropDownProfile ? setToggleDropDownProfile(!toggleDropDownProfile) : null;
        toggleDropDownSpace ? setToggleDropDownSpace(!toggleDropDownSpace) : null;
    }


    return (
        <nav className='nav-container'>
            <div className='q-logo-container'>
                <img className='q-logo' src={QuoraLogo} alt="quora-logo" />
            </div>
            <ul className='nav-list-left'>
                <li className='home'><NavLink to="home" className='nav-icon'><MdHome /></NavLink></li>
                <li className='following'><NavLink to="following" className='nav-icon'><RiListView /></NavLink></li>
                <li className='answer'><NavLink to="" className='nav-icon'><FaRegEdit /></NavLink></li>
                <li className='spaces'
                    onClick={handlerDropdownSpace}
                ><span className='nav-icon'><FaPeopleGroup /></span>
                    <div className="space-dropdown-box"
                        style={{ display: toggleDropDownSpace ? "block" : "none" }}
                    >
                        <Link className="see-all-spaces">See All Spaces <FaAngleRight /></Link>
                        <ul className="space-dropdown-list">
                            {spaceData.slice(0, 4).map(space => {
                                return (
                                    <li key={space.id}>
                                        <img src={space.imgUrl} className='spaceImg' alt="SpaceImage" width={'50px'} />
                                        <span>{space.name}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </li>
                <li className='notifications'><NavLink to="notification" className='nav-icon'><IoNotifications /></NavLink></li>
            </ul>
            <div className='search-box nav-icon'>
                <IoIosSearch className='search-icon' />
                <input className='search-input-box'
                    type="text"
                    placeholder='Search Quora'
                />
            </div>
            <ul className='nav-list-right'>
                <li className='try-quora-box'>
                    <button
                        onClick={handleOpenPremiumCard}
                        className='try-quora-link'>Try Quora+</button>


                </li>
                <li className='profile-icon'>
                    <button className='nav-icon' onClick={handlerDropdownProfile}><FcButtingIn /></button>
                    <div
                        className='profile-dropdown-box'
                        style={{ display: !toggleDropDownProfile ? "none" : "block" }}
                    >
                        <Profile />
                    </div>
                </li>
                <li className='lang-icon'>
                    <button onClick={handlerDropdownLanguage} className='nav-icon'><IoGlobeOutline /></button>
                    <div className='lang-dropdown-box'
                        style={{ display: toggleDropDownLanguage ? "block" : "none" }}
                    >
                        <ul>
                            <li>Languages</li>
                            <li>
                                <span>EN</span>
                                <span>English</span>
                                <span><FaRegCircleCheck /></span>
                            </li>
                            <li><button>Add language</button></li>
                            <li><button>See all languages</button></li>
                        </ul>
                    </div>
                </li>
                <li className='add-arrow-btn-box'>
                    <button onClick={handleAddQus} className='add-qus-btn'>Add question </button>
                    <button className='create-post-btn' onClick={handlerDownarrow}><FaChevronDown /></button>
                    <div className="dropdown-btn-box"
                        style={{ display: !toggleDownarrow ? "none" : "block" }}
                    >
                        <button onClick={handleCreatePost} ><FaPencil />Create Post</button>
                    </div>
                </li>
            </ul>
            <div className="add-qus-card"
                // onClick={(e) => {
                //     !disableChild ? setIsOpenAddQusCard(!isOpenAddQusCard) : null;
                //     // setDisableChild(false);
                // }}
                style={{ display: isOpenAddQusCard ? "flex" : "none" }}>

                <AddQuestion
                    // closePage={(e) => {
                    //     // e.stopPropagation(); 
                    //     // setDisableChild(!disableChild);
                    //     console.log("helo");
                    //     setIsOpenAddQusCard(!isOpenAddQusCard);

                    // }}
                    isOpenAddQusCard={isOpenAddQusCard}
                    setIsOpenAddQusCard={setIsOpenAddQusCard}
                    initialCard={initialCard}
                    setInitialCard={setInitialCard}
                />
            </div>
            <div className="premium-card"
                style={{ display: isOpenPremiumCard ? "flex" : "none" }}
                onClick={(e) => setIsOpenPremiumCard(!isOpenPremiumCard)}
            >
                <h1>This is premium card</h1>
            </div>

        </nav >
    )
}

export default NavBar

