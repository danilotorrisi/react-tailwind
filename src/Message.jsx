import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function Message(props) {
  return <div className="flex items-end bg-red-300 m-2">{props.body}</div>;
}

export default Message;
