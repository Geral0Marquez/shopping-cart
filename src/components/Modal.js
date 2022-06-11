import React from 'react';
import "../styles/loading-screen.css";

const Modal = () => {
    return (
        <div className='overlay-modal'>
          <div className='content-modal'>
              <div className='encabezado'><h3>ola</h3></div>
                <button className='button'> x</button>
          </div>
        </div>
    );
};

export default Modal;