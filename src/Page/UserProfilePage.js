import React, {useState, useEffect} from 'react'

import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfilePage = () => {

    const [users, setUser] = useState([])
    const [images, setImages] = useState([])
    const {id} = useParams()
    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v1/users/${id}`)
        .then(response => {

         setUser(response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.log('ERROR', error)
        })
        axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${id}`)
        .then(response => {

         setImages(response.data)
          console.log(response.data)
        })
        .catch(error => {
          console.log('ERROR', error)
        })
      },[])
    return (
        <div>
             <h3 style={{textAlign: 'center'}}>{users.username}</h3>
             <img src={users.profileImage} style={{
               width:'200px',
                height:'200px', 
                borderRadius: '360%', 
               position: 'relative',
               left: '670px'
                }}/>
             <div style={{margin: '10px'}}>
                 {
                     images.map(image => {
                         return <img src={image.url} style={{
                           width: "150px", 
                           height: '150px', 
                           padding: '10px',
                           position: 'relative',
                           left: '200px',
                           flex: 1,
                           flexWrap: 'wrap'
                          }}/>
                     })
                 }
             </div>
        </div>
    )
}
export default UserProfilePage