import React from 'react';
import PostHeader from './PostHeader.jsx';
import PostBody from './PostBody.jsx';
import ActionBar from './ActionBar.jsx';
import PostComments from './PostComments.jsx';
import faker from 'faker';
function Post() {
  return (
    <div className=" flex flex-col max-w-2xl rounded-lg shadow-lg mb-5 bg-black bg-opacity-80 text-white  text-opacity-80 px-1">
      <PostHeader
        name={faker.fake('{{name.firstName}} {{name.lastName}}')}
        time="17:00"
        day="15 Febbraio 2021"
        avatar={faker.image.cats()}
      ></PostHeader>
      <PostBody text={faker.lorem.words(40)}></PostBody>
      <ActionBar comments="5" like="10" share="3"></ActionBar>
      <PostComments
        name={faker.fake('{{name.firstName}} {{name.lastName}}')}
        text={faker.lorem.words(15)}
        avatar={faker.image.cats()}
      ></PostComments>
    </div>
  );
}

export default Post;
