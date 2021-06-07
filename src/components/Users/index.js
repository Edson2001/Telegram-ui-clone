import React from 'react'
import uu from '../../avatar/u-1.png'

import '../../icofont/icofont.css'


export default function Users({statusComp, name}){

    const style = 'ul-menu-item '+statusComp
    return(

        
        <li className={style}>
            <div className="logo" >
                <img src={uu} alt="" />
            </div>
            <div className="itens">
                <h6>
                <span>{name}</span>
                <span>Sat</span>
                </h6>
                <span>Código de login: 12345. Não vai env...</span>
            </div>
        </li>


    )

}
