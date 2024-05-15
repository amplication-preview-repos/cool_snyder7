import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FontConfigWhereInput = {
  fontFamily?: StringNullableFilter;
  fontSize?: IntNullableFilter;
  id?: StringFilter;
};
