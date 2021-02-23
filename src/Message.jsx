import React, { useState, useEffect } from 'react';
import { DateTime } from 'luxon';

function Message(props) {
  return <div className="flex items-end">{props.body}</div>;
}

export default Message;
