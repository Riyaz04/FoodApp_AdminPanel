import React, { useState } from 'react'
import './AddFoodData.css'

//fireBase Import
import { db, storage } from '../FireBase/FireBaseConfig'
import { addDoc, collection } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
//fireBase Import

const AddFoodData = () => {
  const [foodName, setFoodName] = useState('')
  const [foodPrice, setFoodPrice] = useState('')
  const [foodImage, setFoodImage] = useState('0')
  const [restaurantName, setRestaurantName] = useState('')
  const [restaurantAddress, setRestaurantAddress] = useState('')
  const [restaurantPhone, setRestaurantPhone] = useState('')
  const [discription, setDiscription] = useState('')
  const [foodImageUrl, setFoodImageUrl] = useState('')
  const [foodCategory, setFoodCategory] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (foodImage == 0) {
      alert('Please Select Image')
    } else {
      const imageRef = ref(storage, `FoodImage/${foodImage.name}`)
      uploadBytes(imageRef, foodImage)
        .then(() => {
          alert('Image uploaded successfully')
          getDownloadURL(imageRef).then((url) => {
            // console.log(url)
            // setFoodImageUrl(url)

            const foodData = {
              foodName,
              foodPrice,
              foodImageUrl: url,
              foodCategory,
              restaurantName,
              restaurantAddress,
              restaurantPhone,
              discription,
            }
            // console.log(foodData)
            // fireBase Code
            try {
              const docRef = addDoc(collection(db, 'FoodData'), foodData)
              alert('Data Added Successfully: ', docRef.id)
            } catch (error) {
              alert('error adding the document', error)
            }
            // fireBase Code
          })
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }

  return (
    <div className="Form-Outer">
      <h1>Add Food Data</h1>
      <form className="form-inner">
        <label>Food Name</label>
        <input
          type="text"
          name="foodName"
          onChange={(e) => {
            setFoodName(e.target.value)
          }}
        />
        <br />
        <label>Discription</label>
        <input
          type="text"
          name="discription"
          onChange={(e) => {
            setDiscription(e.target.value)
          }}
        />
        <br />
        <label>Food price</label>
        <input
          type="number"
          name="foodPrice"
          onChange={(e) => {
            setFoodPrice(e.target.value)
          }}
        />
        <br />
        <label>Food category</label>
        <input
          type="text"
          name="foodPrice"
          onChange={(e) => {
            setFoodCategory(e.target.value)
          }}
        />
        <br />
        <label>Food Image</label>
        <input
          type="file"
          name="foodImage"
          onChange={(e) => {
            setFoodImage(e.target.files[0])
          }}
        />
        <br />
        <label>Restaurant Name</label>
        <input
          type="text"
          name="restaurantName"
          onChange={(e) => {
            setRestaurantName(e.target.value)
          }}
        />
        <br />
        <label>Restaurant Address</label>
        <input
          type="text"
          name="restaurantAddress"
          onChange={(e) => {
            setRestaurantAddress(e.target.value)
          }}
        />
        <br />
        <label>Restaurant Phone</label>
        <input
          type="number"
          name="restaurantPhone"
          onChange={(e) => {
            setRestaurantPhone(e.target.value)
          }}
        />
        <br />
        <button onClick={handleSubmit}>Add Food</button>
      </form>
    </div>
  )
}

export default AddFoodData
