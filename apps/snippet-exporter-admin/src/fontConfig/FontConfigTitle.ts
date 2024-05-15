import { FontConfig as TFontConfig } from "../api/fontConfig/FontConfig";

export const FONTCONFIG_TITLE_FIELD = "fontFamily";

export const FontConfigTitle = (record: TFontConfig): string => {
  return record.fontFamily?.toString() || String(record.id);
};
