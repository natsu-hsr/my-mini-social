import React, { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

import Message from '../message/message';
import Post from './post/post';
import {loadPosts, TPosts, postsSelectors} from '../../store/slices/posts';
import {useAppDispatch, useAppSelector} from '../../store/config/hooks';
import {selectIsThunkPending, selectThunkError} from '../../store/slices/loading-state/loading-state-slice';

import c from './posts.module.scss';

function Posts() {
  const dispatch = useAppDispatch();
  const posts: TPosts | undefined = useAppSelector(postsSelectors.selectPosts);

  const isLoading = useAppSelector(s => selectIsThunkPending(s, loadPosts.typePrefix));
  const loadingError = useAppSelector(s => selectThunkError(s, loadPosts.typePrefix));

  console.log('posts=', posts);
  console.log('loadingError=', loadingError);

  useEffect(() => {
    if (posts === undefined) {
      dispatch(loadPosts());
    }
  }, []);

  return (
    <div className={c.wrapper}>
      {(() => {
        if (isLoading) {
          return <CircularProgress />;
        }

        if (!posts?.length || !!loadingError) {
          return (
            <Message
              type='error'
              message={loadingError?.data ? loadingError.data : 'Something went wrong'}
            />)
        }

        if (posts.length === 0) {
          return <Message type='empty' />;
        }

        return posts.map(p => <Post post={p} />)
      })()}
    </div>
  )
}

export default Posts;
