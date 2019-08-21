export const POST_HOLIDAY = 'HOLIDAY/POST_HOLIDAY';
export const POST_HOLIDAY_SUCCESS = 'HOLIDAY/POST_HOLIDAY_SUCCESS';

export const postHoliday = (
  startDate,
  endDate,
  totalAbsence,
  absenceCategory,
  selectApprover
) => {
  return {
    type: POST_HOLIDAY,
    payload: {
      startDate,
      endDate,
      totalAbsence,
      absenceCategory,
      selectApprover,
    },
  };
};
export const postHolidaySuccess = () => {
  return {
    type: POST_HOLIDAY_SUCCESS,
  };
};
