export type TIconNameLocal = `local:${string}`;
export type TIconNameIconify = `${string}:${string}`;
export type TIconName = TIconNameLocal | TIconNameIconify;

export type TIconData = { viewBox: string; innerHtml: string } | null;

export type TIconRegistry = Record<string, string>;

export type TSplittedIconName = {
  prefix: string | undefined;
  name: string | undefined;
};
