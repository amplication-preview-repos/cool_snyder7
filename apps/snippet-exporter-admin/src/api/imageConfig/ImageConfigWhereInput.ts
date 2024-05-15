import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ImageConfigWhereInput = {
  backgroundColor?: StringNullableFilter;
  height?: IntNullableFilter;
  id?: StringFilter;
  width?: IntNullableFilter;
};
