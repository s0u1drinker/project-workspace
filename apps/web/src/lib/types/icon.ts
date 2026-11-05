import { ICON_LOCAL_PREFIX, ICON_DELIMITER, LOCAL_ICONS, ICONIFY_ICON_MAP } from '$constants';

export type TLocalIcon = (typeof LOCAL_ICONS)[number];
export type TIconNameLocal = `${typeof ICON_LOCAL_PREFIX}${typeof ICON_DELIMITER}${TLocalIcon}`;

type TIconifyCollections = keyof typeof ICONIFY_ICON_MAP;
export type TIconNameIconify = {
  [
    TCollection in TIconifyCollections
  ]: (typeof ICONIFY_ICON_MAP)[TCollection][keyof (typeof ICONIFY_ICON_MAP)[TCollection]];
}[TIconifyCollections];

export type TIconName = TIconNameLocal | TIconNameIconify;

export type TIconData = { viewBox: string; innerHtml: string } | null;

export type TIconRegistry = Record<string, string>;

export type TSplittedIconName = {
  prefix: string | undefined;
  name: string | undefined;
};
