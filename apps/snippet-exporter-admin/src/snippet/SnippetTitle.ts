import { Snippet as TSnippet } from "../api/snippet/Snippet";

export const SNIPPET_TITLE_FIELD = "language";

export const SnippetTitle = (record: TSnippet): string => {
  return record.language?.toString() || String(record.id);
};
