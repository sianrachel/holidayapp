import { Action } from 'redux';
import { User } from 'src/Types/Approvers';

export const GET_APPROVERS = 'APPROVERS/GET_APPROVERS';
export const GET_APPROVERS_SUCCESS = 'APPROVERS/GET_APPROVERS_SUCCESS';

export const getApprovers = (): Action => {
  return {
    type: GET_APPROVERS,
  };
};

interface GetApproversSuccess extends Action {
  users: User[];
}

export const getApproversSuccess = (users: User[]): GetApproversSuccess => {
  return {
    type: GET_APPROVERS_SUCCESS,
    users: users,
  };
};
