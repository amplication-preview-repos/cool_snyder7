import { JsonValue } from "type-fest";

export type ColorConfig = {
  createdAt: Date;
  id: string;
  syntaxHighlight: JsonValue;
  textColor: string | null;
  updatedAt: Date;
};
