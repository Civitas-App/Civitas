import React from 'react'
import {useSelector} from 'react-redux'

const AllBusinesses = () => {
  const businesses = useSelector(state => state.businesses)

  return (
    <div>
      {businesses.map(query => (
        <div key={query.id}>
          <h4>Name: {query.name}</h4>
          <img src={query.headerPhoto} />
          <h4>Description: {query.description}</h4>
        </div>
      ))}
    </div>
  )
}

export default AllBusinesses
