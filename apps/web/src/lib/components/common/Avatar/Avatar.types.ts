import type { TAvatarReplace } from '$stores';

export interface IAvatar {
  img: string | null;
  avatarReplace?: TAvatarReplace;
  userInitials?: string;
}
