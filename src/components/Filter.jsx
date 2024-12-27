import React, { useState } from 'react'
import '../styles/filters.css'

const Filters = () => {
  const [filters, setFilters] = useState([
    'All Notification',
    'Stories',
    'Questions',
    'Spaces',
    'People updates',
    'Comments and mentions',
    'Upvotes',
    'Your content',
    'Your profile',
    'Announcements',
    'Earnings',
    'Subscriptions'
  ])
  return (
    <main className='filters-container'>
      <h4 className='filter-label'>Filters</h4>
      <div className="filter-compo-box">
        {filters.map((filter, index) => (
          <button key={index}>{filter}</button>
        ))}
      </div>
    </main>
  )
}

export default Filters