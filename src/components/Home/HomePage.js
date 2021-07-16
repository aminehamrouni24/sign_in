import React from 'react'
import './home.css'

function HomePage() {
    return (
        <div className="home-content">
        <div className="right-side">
       <img className="logo1" alt="pagelogo" src="./a2.png"/>

       <div class="wrapper">
       <div class="title">
         Registration Form
       </div>
       <div class="form">
          <div class="inputfield">
             <label>Full Name</label>
             <input type="text" class="input"/>
          </div>  
          <div class="inputfield">
          <label>Email Address</label>
          <input type="text" class="input"/>
       </div> 
          <div class="inputfield">
             <label>Password</label>
             <input type="password" class="input"/>
          </div>              
 
         <div class="inputfield terms">
             <label class="check">
               <input type="checkbox"/>
               <span class="checkmark"></span>
             </label>
             <p>Agreed to terms and conditions</p>
          </div> 
         <div class="inputfield">
           <input type="submit" value="Register" class="btn"/>
         </div>
       </div>
   </div>
   </div>       


        <div className="left-side">
        <h2>Start doing what's necessary</h2>
        <h3>Then do what's possible</h3>
        <h2> and suddenly you are doing the impossible</h2>
            <h1>Join the team Now...</h1>
            <img className="logo2" src="./a1.png" alt="logo"/></div> 
           
        </div>
    )
}

export default HomePage

