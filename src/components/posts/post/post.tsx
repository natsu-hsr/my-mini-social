import React from 'react'
import {TPost} from '../../../store/slices/posts'

import c from './post.module.scss';

interface IPostProps {
  post: TPost
}

function Post({post}: IPostProps) {
  const {
    title,
    desc,
    dateCreated,
  } = post;

  return (
    <div className={c.wrapper}>
      <div className={c.title}>{title}</div>
      <div className={c.desc}>{desc}</div>
      <div className={c['date-created']}>{dateCreated}</div>
    </div>
  )
}

export default Post