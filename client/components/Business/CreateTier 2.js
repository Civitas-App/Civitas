import React from 'react'
import useForm from '../Utility/UseForm'
import {useSelector, useDispatch} from 'react-redux'
import {createTier} from '../../store/business/createBusiness'

const CreateTier = props => {
  const user = useSelector(state => state.user)
  console.log(user.id)
  const [values, handleChange] = useForm({
    level1: 1,
    title1: '',
    pledge1: [],
    price1: 5,
    photo1: '',
    level2: 2,
    title2: '',
    pledge2: [],
    price2: 10,
    photo2: '',
    level3: 3,
    title3: '',
    pledge3: [],
    price3: 15,
    photo3: ''
  })
  //level1 price 1, level2,price2
  const dispatch = useDispatch()
  console.log(values)
  const handleSubmit = e => {
    e.preventDefault()
    const {
      level1,
      title1,
      pledge1,
      price1,
      photo1,
      level2,
      title2,
      pledge2,
      price2,
      photo2,
      level3,
      title3,
      pledge3,
      price3,
      photo3
    } = values
    dispatch(
      createTier({
        id: user.id,
        tiers: [
          {
            level: level1,
            title: title1,
            pledge: pledge1,
            price: price1,
            photo: photo1
          },
          {
            level: level2,
            title: title2,
            pledge: pledge2,
            price: price2,
            photo: photo2
          },
          {
            level: level3,
            title: title3,
            pledge: pledge3,
            price: price3,
            photo: photo3
          }
        ]
      })
    )
    //props.history.push('/business/portal')
  }
  //[ { level1, title1, pledge1 },  { level2, title 2, pledge2 }, {level3, title3, pledge3} ]
  //make form for all three tiers, submit the tier and add business in api
  return (
    <div>
      <h2>Tier Level 1</h2>
      <form onSubmit={handleSubmit}>
        <h4>Level</h4>
        <label htmlFor="level" />
        <input
          placeholder="level"
          name="level1"
          value={values.level1}
          onChange={handleChange}
        />
        <h4>Title</h4>
        <label htmlFor="title" />
        <input
          placeholder="tier title"
          name="title1"
          value={values.title1}
          onChange={handleChange}
        />
        <h4> Pledge - what you are offering for this pledge</h4>
        <label htmlFor="pledge" />
        <input
          placeholder="pledge - seperate each sentence(pledge) with a comma"
          name="pledge1"
          value={values.pledge1}
          onChange={handleChange}
        />
        <h4>Price of tier subscription</h4>
        <label htmlFor="price" />
        <input
          placeholder="price"
          name="price1"
          value={values.price1}
          onChange={handleChange}
        />
        <h4>Photo</h4>
        <label htmlFor="photo" />
        <input
          placeholder="photo URL - default image will be used if none is provided"
          name="photo1"
          value={values.photo1}
          onChange={handleChange}
        />

        <h2>Tier Level 2</h2>
        <h4>Level</h4>
        <label htmlFor="level" />
        <input
          placeholder="level"
          name="level2"
          value={values.level2}
          onChange={handleChange}
        />
        <h4>Title</h4>
        <label htmlFor="title" />
        <input
          placeholder="tier title"
          name="title2"
          value={values.title2}
          onChange={handleChange}
        />
        <h4>Pledge - what you are offering for this pledge</h4>
        <label htmlFor="pledge" />
        <input
          placeholder="pledge - seperate each sentence(pledge) with a comma"
          name="pledge2"
          value={values.pledge2}
          onChange={handleChange}
        />
        <h4>Price of tier subscription</h4>
        <label htmlFor="price" />
        <input
          placeholder="price"
          name="price2"
          value={values.price2}
          onChange={handleChange}
        />
        <h4>Photo</h4>
        <label htmlFor="photo" />
        <input
          placeholder="photo URL - default image will be used if none is provided"
          name="photo2"
          value={values.photo2}
          onChange={handleChange}
        />
        <h2>Tier Level 3</h2>
        <label htmlFor="level" />
        <input
          placeholder="level"
          name="level3"
          value={values.level3}
          onChange={handleChange}
        />
        <h4>Title</h4>
        <label htmlFor="title" />
        <input
          placeholder="tier title"
          name="title3"
          value={values.title3}
          onChange={handleChange}
        />
        <h4>Pledge - what you are offering for this pledge</h4>
        <label htmlFor="pledge" />
        <input
          placeholder="pledge - seperate each sentence(pledge) with a comma"
          name="pledge3"
          value={values.pledge3}
          onChange={handleChange}
        />
        <h4>Price of tier subscription</h4>
        <label htmlFor="price" />
        <input
          placeholder="price"
          name="price3"
          value={values.price3}
          onChange={handleChange}
        />
        <h4>Photo</h4>
        <label htmlFor="photo" />
        <input
          placeholder="photo URL - default image will be used if none is provided"
          name="photo3"
          value={values.photo3}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CreateTier
