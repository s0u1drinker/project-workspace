import { AVATAR_REPLACE } from '$constants';

export type TAvatarReplace = keyof typeof AVATAR_REPLACE;

export interface IUser {
  id: string;
  name: string;
  surname: string;
  readonly fullName: string;
  readonly initials: string;
  avatar: string | null;
  settings: {
    avatarReplace: TAvatarReplace;
  };
}
