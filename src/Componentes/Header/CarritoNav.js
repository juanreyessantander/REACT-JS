import React from 'react';

export default function CarritoNav(props) {
  return (

  
      <div>
        <a href="#/cart">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
   
      </div>

  );
}
