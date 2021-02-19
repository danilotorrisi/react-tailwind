import React, { useState, useEffect } from 'react';
import './App.css';
import ConversationItem from './ConversationItem.jsx';
import faker from 'faker';
import { DateTime } from 'luxon';

// Create a JS Date.
const date = new Date(2020, 1, 1);

// Convert to Luxon Date.
const dateLuxon = DateTime.fromJSDate(date);

// A year ago, A month..

function App() {
  return (
    <div className="App flex flex-col h-full w-full bg-gray-100 dark:bg-kbook-default">
      <ConversationItem
        avatar={faker.image.cats()}
        username={faker.fake('{{name.firstName}} {{name.lastName}}')}
        lastMessage={faker.lorem.sentences()}
        date={dateLuxon.toRelative()}
      />
      <ConversationItem
        avatar={faker.image.cats()}
        username={faker.fake('{{name.firstName}} {{name.lastName}}')}
        lastMessage={faker.lorem.sentences()}
        date={dateLuxon.toRelative()}
      />
    </div>
  );
}

export default App;
