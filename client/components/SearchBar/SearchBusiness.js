import React from 'react'
import {useDispatch} from 'react-redux'
import {searchBusiness} from '../../store/business'
import useForm from '../Utility/UseForm'
import AllBusinesses from './AllBusinesses'

const SearchBusiness = () => {
  const [values, handleChange] = useForm({search: ''})
  // mapDispatch
  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    const {search} = values
    dispatch(searchBusiness(search))
  }

  const keyDown = e => {
    const {search} = values
    if (e.key === 'Enter') {
      dispatch(searchBusiness(search))
    }
  }

  return (
    <div>
      <label htmlFor="search" />
      <input
        type="text"
        value={values.search}
        onChange={handleChange}
        onKeyDown={keyDown}
        name="search"
      />
      <AllBusinesses />
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </div>
  )
}

export default SearchBusiness
