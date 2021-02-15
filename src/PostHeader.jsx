
import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
function PostHeader(props) {
    return (
        
            <div className="flex h-8">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>{props.name}</p>
                <p>{props.day} {props.time}</p>
                <div className="transition duration-500 ease-in-out bg-transparent hover:bg-blue-700 transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </div>
            </div>
            
    );
}

export default PostHeader;