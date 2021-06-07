import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar'
import Menu from './components/Menu'
import Messages from './components/Messages'
import uu2 from './avatar/39365797.jfif'
import uu17 from './avatar/u-8.jpg'
import {Provider} from 'react-redux'
import Store from './store'

import './icofont/icofont.css'

function App() {

  return (
   
    <div className="bg">
      <div className="container">
       
        <Menu />

        <div className="containerInterno">

          <Provider store={Store}>
            <Sidebar />
          </Provider>

          <main className="main">

            <div className="messages">

             
              <Messages nameUser="Júnior Santos" message="Olá dude" avatar={uu17} />

              <Messages />
              <Messages />
              
              
            </div>

            <div className="send">

              <div className="user-logo">
                <img src={uu2} alt="" />
              </div>

              <div className="mainSend">
                <i className="icofont-simple-smile ico-size"></i>
                <input placeholder="Write a message" />
              </div>

              <div className="sendButtom">
               
                <i className="icofont-paper-plane"></i>
              
              </div>

            </div>

          </main>

        </div>

      </div>
    </div>

  );
}



export default App;
