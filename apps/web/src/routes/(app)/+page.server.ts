import { GREETINGS, MESSAGES } from '$components/features/dashboard';
import { getRandomItemFromArray } from '$lib/utils';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
  greeting: getRandomItemFromArray(GREETINGS),
  message: getRandomItemFromArray(MESSAGES)
});
