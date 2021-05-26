import React from 'react'


import moreIco from '../../more.svg'
import '../../icofont/icofont.css'

function Menu() {

  return (
   
  
       
    <div className="header">

        <div className="info">
        <i className="icofont-navigation-menu"></i>
        <h6>Telegram</h6>
        </div>

        <div className="middle">
        <p>Edson Dos Santos</p>
        </div>

        <div className="options">
        <i className="icofont-search"></i>
        <img src={moreIco} alt="" />
        </div>

    </div>

       
  );
}



export default Menu;
