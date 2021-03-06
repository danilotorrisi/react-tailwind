import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

function ActionBar(props) {
  return (
    <div className=" text-white  text-opacity-80 ">
      <div className=" grid grid-cols-3 gap-4 items-center px-20">
        <div>Commenti:{props.comments}</div>
        <div>Mi piace:{props.like}</div>
        <div>Condivisioni:{props.share} </div>
      </div>
      <hr className="mx-4 border-gray-300 " />
      <div className="flex justify-around mx-4 my-2 ">
        <div className="flex font-medium hover:bg-gray-500 rounded-md py-2 px-6 transform ">
          <div className="w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
          </div>
          <div className="text-xs flex-grow px-2 uppercase">mi piace</div>
        </div>
        <div className="flex font-medium hover:bg-gray-500 rounded-md py-2 px-6 transform ">
          <div className="w-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
          </div>
          <div className="text-xs flex-grow px-2 uppercase">condividi</div>
        </div>
      </div>
      <hr className="mx-4 p-1 border-gray-300 " />
    </div>
  );
}

export default ActionBar;
