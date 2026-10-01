import { redirect } from '@sveltejs/kit';
import { PATH_NAME } from '$lib/constants';
import type { Handle } from '@sveltejs/kit';

const isAuthenticated = false;

export const handle: Handle = async ({ event, resolve }) => {
  const { pathname } = event.url;
  const isAuthPage = pathname.startsWith(PATH_NAME.login) || pathname.startsWith(PATH_NAME.signup);
  const isAppPage = pathname === PATH_NAME.index;

  if (!isAuthenticated && isAppPage) {
    throw redirect(303, PATH_NAME.login);
  }

  if (isAuthenticated && isAuthPage) {
    throw redirect(303, PATH_NAME.index);
  }

  return resolve(event);
};
