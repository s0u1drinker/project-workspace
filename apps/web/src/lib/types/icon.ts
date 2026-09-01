export type TIconName = `${string}:${string}`;

export type TIconData = { viewBox: string; innerHtml: string } | null;

export type TIconRegistry = Record<string, string>;

export type TSplittedIconName = {
  prefix: string | undefined;
  name: string | undefined;
};
