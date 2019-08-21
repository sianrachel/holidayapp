import * as holidayActions from './Areas/Holiday/actions';
import * as toastActions from './Areas/Toast/actions';
import * as statusActions from './Areas/Status/actions';
import * as approversActions from './Areas/Approvers/actions';

export default {
  ...holidayActions,
  ...toastActions,
  ...statusActions,
  ...approversActions,
};
