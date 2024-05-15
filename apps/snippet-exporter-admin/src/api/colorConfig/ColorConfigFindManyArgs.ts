import { ColorConfigWhereInput } from "./ColorConfigWhereInput";
import { ColorConfigOrderByInput } from "./ColorConfigOrderByInput";

export type ColorConfigFindManyArgs = {
  where?: ColorConfigWhereInput;
  orderBy?: Array<ColorConfigOrderByInput>;
  skip?: number;
  take?: number;
};
