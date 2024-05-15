import { ImageConfigWhereInput } from "./ImageConfigWhereInput";
import { ImageConfigOrderByInput } from "./ImageConfigOrderByInput";

export type ImageConfigFindManyArgs = {
  where?: ImageConfigWhereInput;
  orderBy?: Array<ImageConfigOrderByInput>;
  skip?: number;
  take?: number;
};
