import * as moment from 'moment-timezone';

export class Nivite3Model {
}

export interface InvitePhoto {
  url: string;
  tags: string[];
  title: string;
  description: string;
}
export interface Guest {
  niviteuid?: string; // nivite auth uid
  uid?: string; // auth uid (on customerFirestore)
  fid?: string; // firebase record id (on customerFirestore)
  name?: string;
  email?: string;

  role?: 'HOST' | 'COLLAB' | 'GUEST' | 'VIEW';
  rsvp?: 'Q' | 'P' | 'V' | 'B' | 'Y' | 'N' | 'M' | 'O' | 'Z'; // Queued | Pending | Viewed | Blocked | Yes | No | Maybe | Optout | Not invited (only imported from google contacts)
  adultCount?: number;
  kidCount?: number;
  longMsg?: string;
  shortMsg?: string;
  hostApproved?: boolean;
  notifyUpdates?: boolean;
}

export interface Invite {
  title: string;
  shortMsg: string;
  hostName?: string;
  timeFrom?: moment.Moment | number;
  timeTo?: moment.Moment | number;
  tz?: string;
  longMsg?: string;
  addrName?: string;
  addrText?: string;
  addrUrl?: string;
  addrDetails?: string;
  defaultYes?: boolean;         // No  -  (default) free version, Yes - paid version
  showGuests?: boolean;         // Yes -  (default) free version, No  - paid version
  autoApproveNewRsvp?: boolean; // Yes -  (default) free version, No  - paid version
  visibleByLink?: boolean;      // Yes -  (default) free version, No  - paid version
  photos?: InvitePhoto[];
  guests?: Guest[];
  /* _dateFrom?: Date;
  _dateTo?: Date;
  _timeFrom?: Date;
  _timeTo?: Date; */
}

export interface ModalMsg {
  id: 'rsvp' | 'atc';
  show: boolean;
}