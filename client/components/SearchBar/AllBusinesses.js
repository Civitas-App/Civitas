import React from 'react'
import {useSelector} from 'react-redux'
import {NavLink} from 'react-router-dom'

const AllBusinesses = () => {
  const businesses = useSelector(state => state.businesses)

  return (
    <div id="business_card">
      {businesses.map(query => (
        <div id="single_business_card" key={query.id}>
          <NavLink className="navlink" to={`/business/${query.id}`}>
            <h4>Name: {query.name}</h4>
          </NavLink>
          <img id="business_card_img" src={query.headerPhoto} />
          <div className="description">
            <h4>Description: {query.description}</h4>
          </div>
          <div />
        </div>
      ))}
    </div>
  )
}

export default AllBusinesses
