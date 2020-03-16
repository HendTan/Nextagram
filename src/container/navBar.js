import React from 'react'

const navBar = () => {
    return (
        <div>
        <img src="https://www.pinclipart.com/picdir/middle/158-1580825_instagram-icon-free-instagram-logo-black-clipart.png"style={{width: '50px', height: '50px'}}/>
        <a href="#" style={{color: 'white', textDecoration: 'none', fontSize: '30px'}}>Nextagram</a>
        <input className= 'inputStyle'  />
        <button className="ipBtn">Search</button>
        <a href="#" className='users' style={{textDecoration: 'none'}}>Users</a>
        <a href="#" className='sign_in' style={{textDecoration: 'none'}}>Sign In</a>
        <a href="#" className='sign_up' style={{textDecoration: 'none'}}>Sign Up</a>
        </div>
    )
}

export default navBar  