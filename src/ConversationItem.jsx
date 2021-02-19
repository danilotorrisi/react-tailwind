import React, { useState, useEffect } from 'react';

function ConversationItem(props) {
  return (
    <div className="flex flex-grow">
      <img src={props.avatar} className="w-8 h-8 rounded-full object-cover " />
      <div className="flex flex-grow flex-col flex-shrink items-start">
        <p className="font-semibold text-xs">{props.username}</p>
        <div className="flex items-center">
          <p className="font-semibold text-xs ">{props.lastMessage}</p>
          <p className="font-semibold text-xs ">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default ConversationItem;
