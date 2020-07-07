import React, {useState, useEffect} from 'react'

function BusinessForm() {
  const [name, setName] = useState()
  const [location, setLocation] = useState()
  const [headerPhoto, setHeaderPhoto] = useState()
  const [avatar, setAvatar] = useState()
  const [description, setDescription] = useState()
  const [category, setCategory] = useState()

  return (
    <div>
      <h1>Business Sign Up Form</h1>
      <form>
        <input placeholder="name - required" name={name} />
        <input placeholder="location - required" name={location} />
        <input placeholder="headerphoto" name={headerPhoto} />
        <input placeholder="avatar" name={avatar} />
        <input placeholder="description - required" name={description} />
        <input placeholder="category - required" name={category} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
export default BusinessForm
