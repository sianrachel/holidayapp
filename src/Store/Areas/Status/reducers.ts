import { Reducer } from 'redux';
import { UserHoliday } from 'src/Types/Holiday';
import { ADD_HOLIDAY } from './actions';
export interface StatusState {
  users: UserHoliday[];
  loading: boolean;
}

const initialHolidays: UserHoliday[] = [
  {
    name: 'Sara',
    holidays: [
      {
        absenceCategory: 'Holiday',
        endDate: new Date(),
        startDate: new Date(),
        totalAbsence: 100,
        selectApprover: 'Mike',
      },
    ],
  },
  {
    name: 'Rick',
    holidays: [],
  },
  {
    name: 'Alan',
    holidays: [],
  },
  {
    name: 'Jenny',
    holidays: [],
  },
];

const initialState = {
  users: initialHolidays,
  loading: false,
};

const statusReducer: Reducer<StatusState> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case ADD_HOLIDAY:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.name === action.name) {
            return {
              ...user,
              holidays: user.holidays.concat([
                {
                  absenceCategory: action.absenceCategory,
                  endDate: action.endDate,
                  startDate: action.startDate,
                  totalAbsence: action.totalAbsence,
                  selectApprover: action.selectApprover,
                },
              ]),
            };
          }
          return user;
        }),
      };
    default:
      return state;
  }
};

export default statusReducer;
