
import React, { useState, useEffect } from 'react';
function PostBody(props) {
    return (
      <div className="flex flex-col flex-grow p-4 pt-0">
      <p className=" font-normal leading-tight dark:text-red dark:text-opacity-80">
        {props.text}
      </p>
    </div>
    );
  }
  
  export default PostBody;