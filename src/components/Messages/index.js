import React from 'react'

import uu2 from '../../avatar/39365797.jfif'
function Messages({nameUser, message, avatar}) {

  return (
             
    <div className="itemMessage">
    <div className="user-info">
        <div className="user">
        {!!avatar ? <img src={avatar} alt="" /> : <img src={uu2} alt="" />}
        
        <div className="messUserEnd">
            <h5 className="user-name">{!!nameUser ? nameUser  : 'Edson Dos Santos'}</h5>
            <div className="messageUser">
            <p>
            {!!message ? message  : " é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por"}
            </p>
            </div>
        </div>

        </div>
        <span className="dataMessage">06:05:39</span>
    </div>
    
    </div>

  );
}



export default Messages;
