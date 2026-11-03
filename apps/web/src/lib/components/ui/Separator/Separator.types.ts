import { ORIENT_MAP } from '$constants';

type orientation = keyof typeof ORIENT_MAP;
type separatorFade = 'in' | 'out' | 'inout';

export interface ISeparator {
  orientation?: orientation;
  color?: string;
  fade?: separatorFade;
}
