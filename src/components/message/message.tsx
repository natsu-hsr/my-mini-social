import React from 'react'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import c from './message.module.scss';

interface IMessageProps {
  type: 'error' | 'empty'
  message?: string;
}

function Message({
  type,
  message = type === 'empty' ? 'Nothing was found' : 'Something went wrong',
}: IMessageProps) {
  console.log('message=', message);
  return (
    <div className={c.wrapper}>
      <div className={c.icon}>
        {type === 'empty' ? (
          <SentimentVeryDissatisfiedIcon />
        ) : (
          <ErrorOutlineIcon  />
        )}
      </div>
      <div>{message}</div>
    </div>
  )
}

export default Message