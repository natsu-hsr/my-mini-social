import React, { useEffect } from 'react'
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

import Message from '../message/message';
import Post from './post/post';
import {loadPosts, TPosts, postsSelectors} from '../../store/slices/posts';
import {useAppDispatch, useAppSelector} from '../../store/config/hooks';
import {selectIsThunkPending, selectThunkError} from '../../store/slices/loading-state/loading-state-slice';

import c from './posts.module.scss';
import Spinner from '../spinner/spinner';

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
          return <Spinner />;
        }

        if (loadingError) {
          return (
            <Message
              type='error'
              message={loadingError?.data ? loadingError.data : 'Something went wrong'}
              fixed
            />
          )
        }

        if (posts?.length === 0) {
          return (
            <Message
              type='empty'
              fixed
            />
          );
        }

        return posts?.map(p => (
          <Post
            key={p.id}
            post={p}
          />
        ));
      })()}
    </div>
  )
}

export default Posts;
