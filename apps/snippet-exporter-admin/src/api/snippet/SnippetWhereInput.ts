import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SnippetWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  language?: StringNullableFilter;
};
