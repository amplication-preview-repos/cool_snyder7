import { SortOrder } from "../../util/SortOrder";

export type SnippetOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  updatedAt?: SortOrder;
};
