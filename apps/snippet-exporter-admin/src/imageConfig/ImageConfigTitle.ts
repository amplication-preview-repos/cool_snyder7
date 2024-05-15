import { ImageConfig as TImageConfig } from "../api/imageConfig/ImageConfig";

export const IMAGECONFIG_TITLE_FIELD = "backgroundColor";

export const ImageConfigTitle = (record: TImageConfig): string => {
  return record.backgroundColor?.toString() || String(record.id);
};
