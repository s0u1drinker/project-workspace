import { redirect } from '@sveltejs/kit';
import { PATH_NAME, APP_COOKIES } from '$lib/constants';

export const POST = async ({ cookies }) => {
  cookies.set(APP_COOKIES.demoAuth, '1', {
    path: PATH_NAME.index,
    httpOnly: true,
    sameSite: 'lax',
    secure: false
  });

  throw redirect(303, PATH_NAME.index);
};
