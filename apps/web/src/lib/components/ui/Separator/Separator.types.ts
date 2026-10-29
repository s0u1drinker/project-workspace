import { ORIENT_MAP } from '$constants';

type orientation = keyof typeof ORIENT_MAP;

export interface ISeparator {
  orientation?: orientation;
}
