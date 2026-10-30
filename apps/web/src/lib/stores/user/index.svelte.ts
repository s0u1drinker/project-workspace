import type { IUser } from './types';

export const user = $state<IUser>({
  id: '1',
  name: 'Дмитрий',
  surname: 'Колготин',
  avatar: '',
  settings: {
    avatarReplace: 'svg'
  },
  get fullName() {
    return `${this.name} ${this.surname}`.trim();
  },
  get initials() {
    return `${this.name[0].toLocaleUpperCase()}${this.surname[0].toLocaleUpperCase()}`;
  }
});
