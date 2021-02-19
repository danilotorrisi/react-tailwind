
import logo from './logo.svg';
import React, { useState, useEffect } from 'react';

function PostHeader(props) {
    return (
        
            <div className="flex items-center p-4">
                
                <img src={props.avatar} className="w-8 h-8 rounded-full object-cover " />
                <div className="ml-2 ">
                    <p className="font-semibold text-base -mb-0.5 hover:underline">{props.name}</p>
                    
                        <p className="font-semibold text-xs ">{props.day} {props.time}</p>
                    </div>
                    <div className="transition duration-500 ease-in-out bg-transparent hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                </div>
            </div>
            
    );
}

export default PostHeader;