import React, { useState, useEffect } from 'react';
import faker from 'faker';
import Message from './Message';

function MessageProps() {
  let chat = [
    {
      // direction:
      sentAt: faker.date.recent(),
      receivedAt: faker.date.recent(),
      readAt: faker.date.past(),
      body: faker.lorem.sentences(),
    },
    {
      // direction:
      sentAt: faker.date.recent(),
      receivedAt: faker.date.recent(),
      readAt: faker.date.past(),
      body: faker.lorem.sentences(),
    },
    {
      // direction:
      sentAt: faker.date.past(),
      receivedAt: faker.date.past(),
      readAt: faker.date.past(),
      body: faker.lorem.sentences(),
    },
    {
      // direction:
      sentAt: faker.date.past(),
      receivedAt: faker.date.past(),
      readAt: faker.date.past(),
      body: faker.lorem.sentences(),
    },
  ];
  return (
    <div className="flex flex-col items-center m-2 mt-0 mb-8 max-w-2xl">
      <div className="flex items-end">
        {chat.map((chat, i) => {
          return <Message key={i} {...chat}></Message>;
        })}
      </div>
    </div>
  );
}

export default MessageProps;
