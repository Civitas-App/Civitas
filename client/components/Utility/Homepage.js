import React, {useState} from 'react'

export function Homepage() {
  return (
    <div id="homepage">
      <h1>Welcome to Civitas</h1>
      <h2>Who are we?</h2>

      <div>
        <h3>
          Civitas is a community-based funding platform that connects loyal
          customers with their local businesses via monthly memberships! Civitas
          allows users to subscribe to a monthly membership to help support
          their local businesses impacted by COVID and/or financial hardships.
          In exchange, local businesses will provide users with food or services
          based on tier levels that users can redeem on a monthly basis.
          Win-win!
        </h3>
      </div>
      <div>
        <h2>For Users</h2>
        <h3>
          Are you a regular at local businesses and restaurants around your
          community? Now more than ever our local businesses need our support to
          make it through these hard times. By signing up on our platform, we
          will connect you with your favorite local businesses where you can
          subscribe to a tier as a monthly subscription. You will then be given
          a monthly voucher to redeem for that tier’s service, food, or items!
          This helps our local businesses generate monthly income to help meet
          their expenses while giving you a great deal not normally offered.
          Support your community and sign up below!
        </h3>
      </div>
      <div>
        <h2>For Local Businesses</h2>
        <h3>
          Are you a local business needing help making monthly expenses through
          these hard times? After signing your business up, our platform will
          connect you with your loyal customers to help you generate recurring
          monthly revenue. You will be able to create your profile and three
          tiers where you will pledge whatever service or items you wish to each
          of your loyal customers on a monthly basis. Not only will this allow
          your community to support your business as repeat customers, but they
          are able to get back what they love most, your services! Win-Win!
          Using our platform and membership model will benefit your business in
          several ways.
        </h3>
        <p>
          <li>
            Recurring payments make it easy for you to forecast monthly revenue
            to help anticipate and meet your expenses.
          </li>
          <li>
            Our analytics page will show you how many subscribers you have and
            what your monthly payments will be.{' '}
          </li>
          <li>
            Our location-based search will help connect you with your
            neighborhood.
          </li>
          <li>
            Hassle free monthly payments directly from the customer to your
            account.
          </li>
        </p>
      </div>

      <img
        src="/krisztina-papp-VRnb4dMwmBQ-unsplash.jpg"
        width={600}
        height={400}
        mode="fit"
      />
    </div>
  )
}
