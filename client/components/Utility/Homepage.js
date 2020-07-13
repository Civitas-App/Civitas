import React, {useState} from 'react'

export function Homepage() {
  return (
    <div id="homepage">
      <h1>Welcome to Civitas</h1>
      <h2>Who are we?</h2>

      <div>
        <h3>
          Civitas is a subscription based website to support local businesses
          affected by covid/hardships. Users can pledge a monthly "donation" to
          their favorite local businesses in need and in exchange, businesses
          will provide users with food or services based on tiers.
        </h3>
      </div>

      <h4>
        <p>
          Get started by using the search bar to search for local businesses
          near you!
        </p>
        <img
          src="/krisztina-papp-VRnb4dMwmBQ-unsplash.jpg"
          width={600}
          height={400}
          mode="fit"
        />
      </h4>
    </div>
  )
}
