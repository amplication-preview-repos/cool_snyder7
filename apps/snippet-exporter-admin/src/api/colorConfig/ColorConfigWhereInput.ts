import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ColorConfigWhereInput = {
  id?: StringFilter;
  syntaxHighlight?: JsonFilter;
  textColor?: StringNullableFilter;
};
