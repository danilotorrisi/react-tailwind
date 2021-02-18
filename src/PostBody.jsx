
import React, { useState, useEffect } from 'react';
function PostBody(props) {
    return (
      <div className="flex flex-col py-7">
      <p className="mr-12 mb-3 pl-4 font-normal leading-tight dark:text-white dark:text-opacity-80">
        {props.text}
      </p>
    </div>
    );
  }
  
  export default PostBody;