import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getAllBussiness} from '../../store/business/getBusiness'

const GetAllBussiness = () => {
  const business = useSelector(state => state.business)
  const dispatch = useDispatch()
  useEffect(
    () => {
      dispatch(getAllBussiness())
    },
    [getAllBussiness]
  )

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

export default GetAllBussiness
