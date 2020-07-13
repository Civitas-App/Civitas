import React from 'react'

const BusinessProfile = ({business}) => {
  return (
    <div>
      <div className="header">
        <img id="business_profile_header" src={business.headerPhoto} />
      </div>
      <div className="business_profile">
        <h2>{business.name}</h2>
        <img id="business_profile_avatar" src={business.avatar} />
        <h3>{business.description}</h3>
      </div>
    </div>
  )
}

export default BusinessProfile
