import { ColorConfig as TColorConfig } from "../api/colorConfig/ColorConfig";

export const COLORCONFIG_TITLE_FIELD = "textColor";

export const ColorConfigTitle = (record: TColorConfig): string => {
  return record.textColor?.toString() || String(record.id);
};
