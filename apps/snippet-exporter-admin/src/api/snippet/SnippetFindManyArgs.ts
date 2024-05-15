import { SnippetWhereInput } from "./SnippetWhereInput";
import { SnippetOrderByInput } from "./SnippetOrderByInput";

export type SnippetFindManyArgs = {
  where?: SnippetWhereInput;
  orderBy?: Array<SnippetOrderByInput>;
  skip?: number;
  take?: number;
};
