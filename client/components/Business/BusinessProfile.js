import React from 'react'

const BusinessProfile = ({business}) => {
  return (
    <div>
      <h2>{business.name}</h2>
      <img src={business.headerPhoto} />
      <img src={business.avatar} />
      <h3>{business.description}</h3>
    </div>
  )
}

export default BusinessProfile
