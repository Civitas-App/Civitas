import React from 'react'
import {useSelector} from 'react-redux'

const AllBusinesses = () => {
  const business = useSelector(state => state.business)
  console.log(business)
  return (
    <div>
      {business.map(query => (
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
