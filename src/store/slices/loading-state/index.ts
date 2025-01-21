export type {
  TThunkRejectionError,
  TLoadingStateSliceState,
} from './loading-state-slice';

export {
  loadingStateReducer,
  selectIsThunkPending,
  selectIsThunkRejected,
  selectThunkError,
  selectThunkStatus,
} from './loading-state-slice';

export {loadingStateSliceName} from './loading-state-constants';
