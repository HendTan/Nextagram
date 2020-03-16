import React, { useEffect, useState } from 'react'
import UploadImage from '../container/UploadImage.js'

import axios from 'axios'
const MyProfilePage =  () => {
    const jwt = localStorage.getItem('jwt')
    const [user,setUser] = useState([])
    const [images, setImages] = useState([])
    useEffect(() => { 
        axios({
            method: 'get',
            url: 'https://insta.nextacademy.com/api/v1/users/me',
            headers: {
                'Authorization': `Bearer ${jwt}` 

            }
        })
        .then(response => {
            setUser(response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.log('ERROR', error)
        })
        axios({
            method: 'get',
            url: 'https://insta.nextacademy.com/api/v1/images/me',
            headers: {
                'Authorization' : `Bearer ${jwt}`
            }
        })
        .then(response => {
            setImages(response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.log('ERROR', error)
        })
    },[])
    return(
        <div>
            <UploadImage />
            <h3>{user.username}</h3>
            <img src={user.profile_picture} style={{borderRadius: '360%'}}/><br />
            <img src={images} style={{width:'200px', height: '200px', margin: '10px'}}/>
        </div>
    )
}
export default MyProfilePage