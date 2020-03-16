import React, { useState } from 'react'
import axios from 'axios'

const UploadImage = () => {
    const [imgFile, setImageFile] = useState(null)

    const [previewImage, setPreviewImage] = useState(null)

    const [message, setMessage] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();
    
        formData.append('img', imgFile)

        let jwt = localStorage.getItem('jwt');

        axios({
            method: 'POST',
            url: 'https://insta.nextacademy.com/api/v1/images/',
            data : formData,
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(response => {
            if(response.data.success){
                setMessage('Image upload successfully!')
            }
        })
        .catch(error => {
            console.log('ERROR', error)
        })
    }

    const fileHandler = (e) => {
        setImageFile(e.target.files[0])
        setPreviewImage(URL.createObjectURL(e.target.files[0]))
    }


    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type='file' onChange={fileHandler} multiple='false'/>
                <div>
                {previewImage ? (
                    <img src={previewImage} style={{width: '200px', height: '200px'}} />
                ): (
                    <h3  className="text-center">
                    {message ? message : "Live Preview"}
                  </h3>
                )
                }
            </div>
            <input type="submit" value="Upload" />
            </form>

        </div>
    )
}
export default UploadImage