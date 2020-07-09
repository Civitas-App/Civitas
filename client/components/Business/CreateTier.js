import React from 'react'
import useForm from '../Utility/UseForm'
import {useSelector, useDispatch} from 'react-redux'
import {createTier} from '../../store/business/createBusiness'

const CreateTier = props => {
  const business = useSelector(state => state.business)
  const [values, handleChange] = useForm({
    level: 1,
    title: '',
    pledge: [],
    price: 5,
    photo: ''
  })
  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()
    const {level, title, pledge, price, photo} = values
    dispatch(
      createTier({id: business.id, tiers: [level, title, pledge, price, photo]})
    )
  }
  props.history.push('/business/portal')
  return (
    <div>
      <h2>Tier Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="level" />
        <input
          placeholder="level"
          name="level"
          value={values.level}
          onChange={handleChange}
        />
        Level
        <label htmlFor="title" />
        <input
          placeholder="tier title"
          name="title"
          value={values.title}
          onChange={handleChange}
        />
        Title
        <label htmlFor="pledge" />
        <input
          placeholder="pledge - seperate each sentence(pledge) with a comma"
          name="pledge"
          value={values.pledge}
          onChange={handleChange}
        />
        Pledge - what you are offering for this pledge
        <label htmlFor="price" />
        <input
          placeholder="price"
          name="price"
          value={values.price}
          onChange={handleChange}
        />
        Price of tier subscription
        <label htmlFor="photo" />
        <input
          placeholder="photo URL - default image will be used if none is provided"
          name="photo"
          value={values.photo}
          onChange={handleChange}
        />
        Photo
      </form>
    </div>
  )
}

export default CreateTier
