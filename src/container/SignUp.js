import React, {useEffect, useState,useRef}from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {

    const [isLogin, changeForm] = useState(true)

    const [disabled, setDisabled] = useState(true)
    
    const [modal1, modal1Change] = useState(false)
          



    const closeModal = () => {
        modal1Change(false)
      }

    const toLoginIn = () => {
        changeForm(true)
      }

    const handleChange2 = (e) => {
        clearTimeout(delay);
        const newUsername = e.target.value;
        setUsername(newUsername);
        const newDelay = setTimeout(() => {
            checkUsername(newUsername);
          }, 1000);
          setDelay(newDelay);
      }
      const Username = useRef('')
  
      const Password= useRef('')
    
    
      const Email = useRef('')
    
      const ConfirmPasswords= useRef('')

      
    const handleChange = () => {
        if(Username.current.value.length < 6 ||
          Email.current.value.length < 6 ||
          Password.current.value.length <6 ||
          ConfirmPasswords.current.value <6 ||
          Password.current.value !== ConfirmPasswords.current.value
        ){
          setDisabled(true)
        }else {
          setDisabled(false)
        }
      }

    
      const SubBtn = () => {
        console.log(Username.current.value)
        console.log(Email.current.value)
        console.log(Password.current.value)      
        console.log(ConfirmPasswords.current.value)
          axios({
            method:'POST',
            url: 'https://insta.nextacademy.com/api/v1/users/',
            headers: {
              'Content-Type': 'application/json'
            },
              data: {
                username: Username.current.value,
                email: Email.current.value,
                password: Password.current.value
              }
          })
          .then(response => {
            console.log(response)
            toast.success("Signed up successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true
            });
          })
          .then(error => {
            alert(error)
          })
      
      }

      const [delay, setDelay] = useState(null);

      const [usernameValid, setUsernameValid] = useState(true)
  
      const [username, setUsername] = useState("");
  
      const checkUsername = newUsername => {
          axios.get(`https://insta.nextacademy.com/api/v1/users/check_name?username=${newUsername}`)
          .then(response => {
              console.log(response.data)
              if(response.data.valid){
                  setUsernameValid(true)
                  alert('The username is available')
              }else {
                  setUsernameValid(false)
                  alert('The username is not available')
              }
          })
      }
  
   

    return (<div>
        <span className='formTitle'>Sign Up</span><button className='closeBtn' onClick={closeModal}>Close</button>
        <hr />
        <h6>Username</h6>
        <input type='text' className ='InputStyle' ref={Username} onChange={handleChange} onChange={handleChange2}/>
        <h6>Email</h6>
        <input type='text' className ='InputStyle' ref={Email} onChange={handleChange}/>
        <h6>Password</h6>
        <input type='password' className ='InputStyle' ref={Password} onChange={handleChange}/>
        <h6> Confirm Password</h6>
        <input type='password' className ='InputStyle' ref={ConfirmPasswords} onChange={handleChange}/><br />
        <span className='newSpan'>Already a member?</span><button onClick={toLoginIn} className='SUHStyle'>Log in here</button><br />
        <button onClick={SubBtn} disabled={disabled}>Submit</button>
        </div>
    )
}
export default SignUp