
import {createSelector, createSlice} from '@reduxjs/toolkit';
import {TPostsSliceState} from './posts-types';
import {postsSliceName} from './posts-constants';
import {AppState} from '../../config/types';
import {loadPosts} from './posts-thunks';

const initialState: TPostsSliceState = {
  posts: undefined,
};

const postsSlice = createSlice({
  name: postsSliceName,
  initialState,
  reducers: {
    resetPosts: (state) => {
      state.posts = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadPosts.fulfilled, (state, {payload}) => {
      state.posts = payload;
  });
  },
});

const selectPostsSliceState = (state: AppState) => state[postsSliceName];

const selectPosts = createSelector(
  selectPostsSliceState, ({posts}) => posts,
);

export const postsSelectors = {
  selectPostsSliceState,

  selectPosts,
};

export const {
  reducer: postsReducer,
  actions: postsActions,
} = postsSlice;