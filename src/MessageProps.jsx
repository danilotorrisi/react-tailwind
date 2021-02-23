import React, { useState, useEffect } from 'react';
import faker from 'faker';


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
    
    );

}
