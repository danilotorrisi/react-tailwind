import React, { useState, useEffect } from 'react';
import './App.css';
import ConversationItem from './ConversationItem.jsx';
import faker from 'faker';

function AppConversation() {
  const chat = new Array(100).fill({}).map(() => ({
    username: faker.name.findName(),
    imgProfile: faker.image.imageUrl(200, 200, null, true),
    lastMessage: faker.lorem.sentences(),
    date: faker.date.recent(),
    isRead: faker.random.boolean(),
  }));

  return (
    <div className="App flex flex-col h-full w-full bg-gray-100 dark:bg-default">
      {chat.map((chat, i) => {
        return <ConversationItem key={i} {...chat}></ConversationItem>;
      })}
    </div>
  );
}

export default AppConversation;
