import React from 'react';
import "./head.css"
//import img from "../../assets/1.png"
import loc from"../../assets/loc.png"
import rec from"../../assets/Rectangle.png"
const Head = () => {

    return (
        <div className='background-container'>
            <div className='text-field'>
                <p className='text'>Your favorite food, delivered to you</p>
           <div className='btn'> 
   <img src={loc} className='loc' />
   <label className='label'>New York</label>
   <img src={rec} className='rec' />
   <input type="search" className='search ' />
   <button type='submit' className='button'>Search</button>
           </div>
           
            </div>
            {/* <img src={img} className='img'/> */}
        </div>
    );
};

export default Head;