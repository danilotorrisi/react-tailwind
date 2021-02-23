import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function RelativeChat(props) {
  let data = props.date;
  let dateLuxon = DateTime.fromJSDate(data);
  let relativeDate = dateLuxon.toRelative();
  return (
    <div className="font-semibold text-xs text-gray-500 pl-3">
      {relativeDate}
    </div>
  );
}

function ConversationItem(props) {
  return (
    <div className="flex items-stretch m-1 p-2 bg-white rounded-lg hover:bg-gray-100">
      <img
        src={props.imgProfile}
        className="w-12 h-12 rounded-full object-cover "
      />
      <div className="flex flex-grow flex-col flex-shrink items-start px-3">
        <div className="font-semibold ">{props.username}</div>
        <div className="flex items-center">
          <div className="font-semibold text-xs text-gray-700 text-left truncate max-w-md ">
            {props.lastMessage}
          </div>
          <RelativeChat {...props} />
        </div>
      </div>
    </div>
  );
}

export default ConversationItem;
