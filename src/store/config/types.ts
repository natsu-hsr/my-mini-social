import {UnknownAction, ThunkDispatch} from '@reduxjs/toolkit/react';
import {TPostsSliceState, postsSliceName} from '../slices/posts';
import {loadingStateSliceName, TLoadingStateSliceState} from '../slices/loading-state';

export type AppState = {
  [postsSliceName]: TPostsSliceState,
  [loadingStateSliceName]: TLoadingStateSliceState;
};

export type Dispatch = ThunkDispatch<AppState, undefined, UnknownAction>;
