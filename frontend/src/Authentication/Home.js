import React from 'react'
import './Autcss.css'
import Login from './Login'
import { Link } from 'react-router-dom'
const Home = (req,res) => {
  
  return (
    <div>
      <div className='navlogs'>
       <Link to='/app/Login'><button  className=' button-5'> Login </button></Link> 
      </div>
      <div> 
      <div> 
      <Link to='/app/Signup'><button  className=' button-5'> Signup </button></Link> 
      </div></div>
        <div className="App">
      <header className="App-header ">
        welcome to Blood donaton page s

        <div className='Homecontainer'>
      <div> 
       <Link to='/app/Login'><button  className=' button-5'> Login </button></Link> 
      </div>
      <div> 
      <Link to='/app/Signup'><button  className=' button-5'> Signup </button></Link> 
      </div>
      </div>
        </header>
      
    </div>
    </div>
  )
}

export default Home