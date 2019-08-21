export const ADD_HOLIDAY = 'STATUS/ADD_HOLIDAY';

export const addHoliday = (
  name,
  absenceCategory,
  startDate,
  endDate,
  totalAbsence,
  selectApprover
) => {
  return {
    type: ADD_HOLIDAY,
    name: name,
    absenceCategory: absenceCategory,
    startDate: startDate,
    endDate: endDate,
    totalAbsence: totalAbsence,
    selectApprover: selectApprover,
  };
};
