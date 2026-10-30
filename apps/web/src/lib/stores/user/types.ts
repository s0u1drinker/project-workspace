export type TAvatarReplace = 'svg' | 'letters';

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
