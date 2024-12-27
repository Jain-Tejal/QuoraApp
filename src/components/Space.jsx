import React, { useState } from 'react';
import '../styles/spaces.css'
import { Link } from 'react-router-dom';

import spaceData from '../api/spaceData.json'  // Space data import

function Space() {
    const [query, setQuery] = useState([
        'About', 'Careers', 'Terms', 'Privacy',
        'Acceptable use', 'Advertise', 'Press',
        'Your Ad Choices', 'Grievance Officer',
    ])


    return (
        <section className='left-compo-spaces'>
            <div className='spaces-container'>
                <button className='createSpaceBtn'><span>+</span> Create Spaces</button>
                <ul style={{ listStyle: 'none' }} >
                    {spaceData.map(space => {
                        return (
                            <li key={space.id}>
                                <img src={space.imgUrl} className='spaceImg' alt="SpaceImage" width={'50px'} />
                                <span>{space.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='query-container'>
                {query.map((query, index) => {
                    return (
                        <div className='query-link-box'>
                            <Link className='query-link' key={index} >{query}</Link>
                            <span>&middot;</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Space