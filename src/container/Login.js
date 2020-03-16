import React, {useState,useRef, useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'
import HomePage from '../Page/HomePage.js'


const Login = () => {


    let history = useHistory([])

    const lgnUsr = useRef('')

    const lgnPss = useRef('')

    const [disabled1, setDisnabled1] = useState(true)

    const handleChange0 = () => {
        if(lgnUsr.current.value.length < 6 ||
            lgnPss.current.value.length < 6 
            ){
                setDisnabled1(true)
            }else{
                setDisnabled1(false)
            }
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

 
    const [modal1, modal1Change] = useState(false)

    const [isLogin, changeForm] = useState(true)
  
    const Username = useRef('')
  
    const Password= useRef('')
  
  
    const Email = useRef('')
  
    const ConfirmPasswords= useRef('')
  
    const [disabled, setDisabled] = useState(true)
      
  const Modal1Style = {
    display: modal1? 'block': 'none',
    width: '100vw',
    height: '100vh'
  }
  const BtnClick = () => {
    modal1Change(!modal1)
  }
  

  const toLoginIn = () => {
    changeForm(true)
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
        changeForm(true)
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
  const closeModal = () => {
    modal1Change(false)
  }

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
      const handleChange2 = (e) => {
        clearTimeout(delay);
        const newUsername = e.target.value;
        setUsername(newUsername);
        const newDelay = setTimeout(() => {
            checkUsername(newUsername);
          }, 1000);
          setDelay(newDelay);
      }
    const toSignUp = () => {
        changeForm(false)
      }
      const [loggedIn, setLoggedIn] = useState(true)
    const LgnBtn = (e) => {
      e.preventDefault()
     console.log(lgnUsr.current.value)
     console.log(lgnPss.current.value)
     axios({
         method: 'POST',
         url: 'https://insta.nextacademy.com/api/v1/login',
         header: {
             'Content-Type' : 'application/json'
         },
        data: {
        username: lgnUsr.current.value,
        password: lgnPss.current.value
         },
     })
     .then(result=> {
         console.log(result)
         localStorage.setItem('jwt', result.data.auth_token)
         setLoggedIn(false)
         toast.success("Logged in successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
         })
     })
     .then(error => {
         console.log(error)
     })
    }
        const logOutHandeler = () => {
            localStorage.removeItem('jwt')
            setLoggedIn(true)
        }
    return (

        <div>{loggedIn ?
            <button onClick={BtnClick} className='LGN' >Login</button>:
            <div>
              <button onClick={logOutHandeler}>Logout</button>
              <Link to='/profile' className='myProfilePage' style={{textDecoration: 'none', color: 'white', position: 'relative', right: '650'}}>My Profile</Link>
            </div>
            }
            <div classname='Modal'>
                <ToastContainer />
                <div style={Modal1Style} className='ModalStyle'>
                    {
                     isLogin ?
                        <div className='LoginStyle'>
                            <span className='formTitle'>Login</span><button className='closeBtn' onClick={closeModal}>Close</button>
                            <hr />
                            <h6>Username</h6>
                            <input type='text'className ='InputStyle' ref={lgnUsr} onChange={handleChange0}/>
                            <h6>Password</h6>
                            <input type='password' className ='InputStyle' ref={lgnPss} onChange={handleChange0}/><br />
                            <span className='newSpan'>New member?</span><button onClick={toSignUp} className='SUHStyle'>Sign up here</button>
                            <br />
                            <button  onClick={LgnBtn} disabled={disabled1}>Login</button>
                        </div>:
                            <div>
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
                        }
                    </div>
                 </div>
            </div>
    )
}
export default Login 