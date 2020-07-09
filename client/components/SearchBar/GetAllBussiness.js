import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAllBussiness} from '../../store/business/getBusiness'
import {NavLink} from 'react-router-dom'

const GetAllBussiness = () => {
  const businesses = useSelector(state => state.businesses)
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(getAllBussiness())
    },
    [getAllBussiness]
  )

  return (
    <div>
      {businesses.map(query => (
        <div key={query.id}>
          <NavLink to={`/business/${query.id}`}>
            <h4>Name: {query.name}</h4>
          </NavLink>
          <img src={query.headerPhoto} />
          <h4>Description: {query.description}</h4>
        </div>
      ))}
    </div>
  )
}

export default GetAllBussiness
