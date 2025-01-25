import React from 'react'
import {TPost} from '../../../store/slices/posts'
import Avatar from '@mui/material/Avatar/Avatar';

import c from './post.module.scss';

interface IPostProps {
  post: TPost
}

function Post({post}: IPostProps) {
  const {
    title,
    desc,
    img,
    dateCreated,
  } = post;

  return (
    <div className={c.wrapper}>
      <Avatar className={c.avatar}>H</Avatar>
      <div className={c.content}>
        <div className={c.header}>
          <div className={c.title}>
            {title}
            <span className={c.dateCreated}>{dateCreated}</span>
          </div>
          <div className={c.options}>**burger**</div>
        </div>
        <div className={c.desc}>{desc}</div>
        {img && <div className={c.img}>**img is here**</div>}
      </div>
    </div>
  )
}

export default Post