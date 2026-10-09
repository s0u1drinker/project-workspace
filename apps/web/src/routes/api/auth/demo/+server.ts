import { redirect } from '@sveltejs/kit';
import { APP_COOKIES, NAVIGATION } from '$lib/constants';

export const POST = async ({ cookies }) => {
  cookies.set(APP_COOKIES.demoAuth, '1', {
    path: NAVIGATION.index.path,
    httpOnly: true,
    sameSite: 'lax',
    secure: false
  });

  throw redirect(303, NAVIGATION.index.path);
};
