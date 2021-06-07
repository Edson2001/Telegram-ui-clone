import React, {useEffect} from 'react'

import Users from '../Users'
import '../../icofont/icofont.css'
import {connect} from 'react-redux'



function Sidebar({itens}){


    useEffect(()=>{
      console.log('oi')
    },[])

    return(

        <div className="sidebar">
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>

          <ul className="ul-menu ">
           
            {
              itens.map(item=>{
                return(
                  <Users statusComp={item.marked} name={item.name} />
                )
              })
            }
        
          </ul>
        </div>

    )

}

export default connect(item=>({itens: item}))(Sidebar)