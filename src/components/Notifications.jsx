import React from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import '../styles/notificationCompo.css'
const Notifications = () => {
    return (
        <main className='notification-compo'>
            <div className="head-box">
                <p className="heading">Notifications</p>
                <div>
                    <button>Mark All As Read</button>
                    <span>&middot;</span>
                    <button>Settings</button>
                </div>
            </div>
            <div className="notification-list">
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
        </main>
    )
}

export default Notifications


const NotificationCard = () => {
    return (
        <div className="notification-card">
            <img src='../../public/spaces-img/spaceimg2.jpg' alt="Notification" />
            <div className="notification-content">
                <div className="notification-detail">
                    <p className="notification-user">User Name</p>
                    <span>&middot;</span>
                    <p className="notification-postBy">Posted by user</p>
                    <span>&middot;</span>
                    <p className="notification-time">12:34 PM</p>
                </div>
                <p className="notification-text">Answered your question: 'How to create a beautiful website  website '.</p>
            </div>
            <div className="notification-action">
                <button><HiDotsHorizontal /></button>
            </div>
        </div>
    )
}