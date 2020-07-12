import React from 'react'
import {useDispatch} from 'react-redux'
import {searchBusiness} from '../../store/business/getBusiness'
import useForm from '../Utility/UseForm'
import history from '../../history'
import CategoryFilter from './CategoryFilter'

const SearchBusiness = () => {
  const [values, handleChange] = useForm({search: ''})
  // mapDispatch
  const dispatch = useDispatch()

  const keyDown = e => {
    const {search} = values
    if (e.key === 'Enter') {
      dispatch(searchBusiness(search))
      history.push(`/search?q=${search}`)
    }
  }

  return (
    <div id="search_bar">
      <label htmlFor="search" />
      <input
        type="text"
        value={values.search}
        onChange={handleChange}
        onKeyDown={keyDown}
        name="search"
      />
      <CategoryFilter />
    </div>
  )
}

export default SearchBusiness
