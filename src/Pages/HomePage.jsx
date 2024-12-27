import React from 'react'
import '../styles/homePage.css'
import QuestionBox from '../components/QuestionBox'
import Space from '../components/Space'
import Advertisement from '../components/Advertisement'
import PostCard from '../components/PostCard'

function HomePage() {
    return (
        <main className='main-homePage'>
            <div className="left-section">
                <Space />
            </div>
            <div className='middle-section'>
                <QuestionBox />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div className='right-section'>
                <Advertisement />
            </div>
        </main>
    )
}

export default HomePage