import { redirect } from '@sveltejs/kit';
import { PATH_NAME, APP_COOKIES } from '$lib/constants';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const routeId = event.route.id;
  const isAppRoute = routeId?.startsWith('/(app)');
  const isAuthRoute = routeId?.startsWith('/(auth)');
  const isAuthenticated = Boolean(event.cookies.get(APP_COOKIES.demoAuth));

  if (!isAuthenticated && isAppRoute) {
    throw redirect(303, PATH_NAME.login);
  }

  if (isAuthenticated && isAuthRoute) {
    throw redirect(303, PATH_NAME.index);
  }

  return resolve(event);
};
