export const TOAST_SUCCESS = 'TOAST/TOAST_SUCCESS';
export const RESET_TOAST = 'TOAST/RESET_TOAST';

export const successSubmit = message => {
  return {
    type: TOAST_SUCCESS,
    message: 'Successful submission!',
  };
};

export const clearMessage = () => {
  return {
    type: RESET_TOAST,
  };
};
