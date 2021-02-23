import React, { useState, useEffect } from 'react';
import './App.css';
import ConversationItem from './ConversationItem.jsx';
import Messages from './Messages';
import Conversations from './Conversations';
import faker from 'faker';

function AppConversation() {
  return (
    <div className="flex  h-full w-full bg-gray-100 dark:bg-default">
      <Conversations />
      <Messages />
    </div>
  );
}

export default AppConversation;
