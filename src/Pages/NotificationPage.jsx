import React from 'react'
import '../styles/notificationPage.css'
import Advertisement from '../components/Advertisement'
import PostCard from '../components/PostCard'
import Filters from '../components/Filters'
import Notifications from '../components/Notifications'


function NotificationPage() {
    return (
        <main className='main-homePage'>
            <div className="left-section">
                <Filters />
            </div>
            <div className='middle-section'>
                <Notifications />
            </div>
            <div className='right-section'>
                <Advertisement />
            </div>
        </main>
    )
}

export default Notivationpage