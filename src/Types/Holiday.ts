import { User } from './Approvers';

export interface Holiday {
  startDate: Date;
  endDate: Date;
  totalAbsence: number;
  absenceCategory: string;
  selectApprover: string;
}

export interface UserHoliday extends User {
  holidays: Holiday[];
}
