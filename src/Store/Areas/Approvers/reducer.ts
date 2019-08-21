import { GET_APPROVERS, GET_APPROVERS_SUCCESS } from './actions';
import { Reducer } from 'redux';
import { User } from 'src/Types/Approvers';

export interface ApproversState {
  users: User[];
  loading: boolean;
}

const initialState = {
  users: [],
  loading: false,
};

const approversReducer: Reducer<ApproversState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case GET_APPROVERS:
      return {
        ...state,
        loading: true,
        users: [],
      };
    case GET_APPROVERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    default:
      return state;
  }
};

export default approversReducer;
