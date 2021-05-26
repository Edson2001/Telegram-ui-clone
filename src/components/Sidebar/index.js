import React from 'react'
import uu from '../../avatar/u-1.png'
import uu2 from '../../avatar/39365797.jfif'

import '../../icofont/icofont.css'

export default function Sidebar(){


    return(

        <div className="sidebar">

            <div className="search">
              <input type="text" placeholder="Search" />
            </div>

            <ul className="ul-menu ">
              <li className="ul-menu-item marked">
                <div className="logo" >
                  <img src={uu} alt="" />
                </div>
                <div className="itens">
                  <h6>
                    <span>Telegram</span>
                    <span>Sat</span>
                  </h6>
                  <span>Código de login: 12345. Não vai env...</span>
                </div>
              </li>

              <li className="ul-menu-item">
                <div className="logo">
                <img src={uu2} alt="" />
                </div>
                <div className="itens">
                  <h6>
                    <span>Telegram</span>
                    <span>Sat</span>
                  </h6>
                  <span>Código de login: 12345. Não vai env...</span>
                </div>
              </li>

              <li className="ul-menu-item">
                <div className="logo">
                  <img src={uu2} alt="" />
                </div>
                <div className="itens">
                  <h6>
                    <span>Telegram</span>
                    <span>Sat</span>
                  </h6>
                  <span>Código de login: 12345. Não vai env...</span>
                </div>
              </li>
            </ul>

          </div>

    )

}