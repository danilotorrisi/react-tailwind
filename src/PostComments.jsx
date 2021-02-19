import React from 'react';

function PostComments(props) {
  return (
    <>
      <div className=" flex flex-col">
        <div className=" flex items-center m-1 ">
          <div className="w-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="flex-grow">
            <div className=" flex rounded-full bg-gray-400 bg-opacity-20 p-2 m-2 ml-4 shadow-sm dark:shadow-md">
              <input
                type="text"
                className="flex-grow bg-gray-400 bg-opacity-0 px-2 outline-none"
                placeholder="Scrivi un commento"
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex m-2 text-white text-opacity-80 ">
        <div className="items-start py-3 ">
          <img
            src={props.avatar}
            className="w-11 h-8 rounded-full object-cover "
          />
        </div>
        <div className=" rounded-xl bg-gray-400 bg-opacity-20 p-2 px-4 m-2 mb-0 ml-3 shadow-sm ">
          <p className="font-medium text-white text-opacity-95 hover:underline">
            {props.name}
          </p>
          <p className="leading-tight">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default PostComments;
