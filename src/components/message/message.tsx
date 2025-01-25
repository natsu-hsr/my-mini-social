import React, {ReactElement} from 'react'
import clsx from 'clsx';

import c from './message.module.scss';

interface IMessageClassnames {
  wrapper?: string;
}

interface IMessageProps {
  type: 'error' | 'empty'
  head?: string | ReactElement;
  message?: string;
  classnames?: IMessageClassnames;
  fixed?: boolean; // fix component position around parent component 
}

function Message({
  type,
  head,
  message = type === 'empty' ? 'Nothing was found' : 'Something went wrong',
  classnames,
  fixed,
}: IMessageProps) {
  const {
    wrapper,
  } = classnames ?? {};

  return (
    <div className={clsx(wrapper, {[c.fixed]: fixed})}>
      <div className={c.head}>
        {(() => {
          if (head) {
            return head;
          }

          if (type === 'empty') {
            return 'Empty'
          }

          return 'Oops...';
        })()}
      </div>
      <div>{message}</div>
    </div>
  )
}

export default Message