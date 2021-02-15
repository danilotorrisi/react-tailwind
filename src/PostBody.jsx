import React, { useState, useEffect } from 'react';
function PostBody(props) {
    return (
      <div class="bg-transparent  box-content h-32 w-80 my-5 py-12 p-8 border-2">
        <p className="mr-12 mb-3 pl-4 font-medium dark:text-white dark:text-opacity-75">
          {props.text}
        </p>
      </div>
    );
  }
  
  export default PostBody;