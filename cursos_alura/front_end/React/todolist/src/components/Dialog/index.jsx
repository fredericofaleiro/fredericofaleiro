import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import './Dialog.styles.css'
import { IconClose } from '../icons';

export function Dialog({ isOpen, onClose, children }) { 
        const dialogRef = React.useRef(null);

        useEffect(() => {
          console.log('isOpen changed:', isOpen);
          if (isOpen) {
            openDialog();
          } else {
            closeDialog();
          }
          }, [isOpen]);

        const openDialog = () => {
          dialogRef.current.showModal();
        };

        const closeDialog = () => {
          dialogRef.current.close();
        };

    return (
        <React.Fragment>  
        <dialog ref={dialogRef}>
          <div className="close-btn-wrapper">
            <button
             autoFocus
              onClick={onClose}
              className="close-btn"
              >
              <IconClose/>
            </button>
          </div>
            {children}
        </dialog>
        </React.Fragment>   
    )
}