import { FontConfigWhereInput } from "./FontConfigWhereInput";
import { FontConfigOrderByInput } from "./FontConfigOrderByInput";

export type FontConfigFindManyArgs = {
  where?: FontConfigWhereInput;
  orderBy?: Array<FontConfigOrderByInput>;
  skip?: number;
  take?: number;
};
