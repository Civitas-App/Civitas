import React from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

const AllBusinesses = () => {
  const businesses = useSelector(state => state.businesses)

  return (
    <div id="business_card">
      {businesses.map(query => (
        <div key={query.id}>
          <NavLink to={`/business/${query.id}`}>
            <h4>Name: {query.name}</h4>
          </NavLink>
          <img id="business_card_img" src={query.headerPhoto} />
          <h4>Description: {query.description}</h4>
          <div />
        </div>
      ))}
    </div>
  )
}

export default AllBusinesses
