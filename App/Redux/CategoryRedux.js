import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
  getCategoryRequest: ['data'],
  getCategorySuccess: ['data'],
  getCategoryFailure: ['error']
})

export const CategoryTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
  list: { data: [], fetching: false, error: null }
})

export const getCategoryRequest = (state, { data }) =>
  state.merge({ ...state, list: { ...state.list, fetching: true, error: null }})
export const getCategorySuccess = (state, { data }) =>
  state.merge({ ...state, list: { ...state.list, data, fetching: false, error: null }})
export const getCategoryFailure = (state, { error }) =>
  state.merge({ ...state, list: { ...state.list, fetching: false, error }})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CATEGORY_REQUEST]: getCategoryRequest,
  [Types.GET_CATEGORY_SUCCESS]: getCategorySuccess,
  [Types.GET_CATEGORY_FAILURE]: getCategoryFailure,
})
