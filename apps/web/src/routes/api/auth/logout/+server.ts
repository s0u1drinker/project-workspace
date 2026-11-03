import { APP_COOKIES, NAVIGATION } from '$lib/constants';

export const POST = async ({ cookies }) => {
  cookies.delete(APP_COOKIES.demoAuth, {
    path: NAVIGATION.index.path
  });

  return new Response(null, { status: 204 });
};
