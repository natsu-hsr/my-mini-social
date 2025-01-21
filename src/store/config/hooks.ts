import {
  TypedUseSelectorHook, useDispatch, useSelector,
} from 'react-redux';

import {AppState, Dispatch} from './types';

export const useAppDispatch = (): Dispatch => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
