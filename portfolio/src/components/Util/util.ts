export interface LocalizedContent {
  "en": string;
  "ja": string;
}

export enum languages {
  ENGLISH = "en",
  JAPANESE = "ja"
}

export enum Sizes {
  XS = "xs",
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl"
}

export enum Roles {
  ANIMATION = "Animation",
  DESIGN = "Game Design",
  PROGRAMMING = "Programming",
  TECH_ART = "Tech Art",
  UI_PROGRAMMING = "UI Programming",
  UI_UX = "UI/UX Design",
}

export const browserLanguage = (): string => {
  return navigator.language
}

export const GetLocalizedContentValue = (content: LocalizedContent) => {
  return browserLanguage() == languages.JAPANESE ? content.ja : content.en
}