import {configureStore} from '@reduxjs/toolkit';
import {postsSliceName, postsReducer} from './slices/posts';
import {loadingStateSliceName, loadingStateReducer} from './slices/loading-state';

export default configureStore({
  reducer: {
    [postsSliceName]: postsReducer,
    [loadingStateSliceName]: loadingStateReducer,
  },
});