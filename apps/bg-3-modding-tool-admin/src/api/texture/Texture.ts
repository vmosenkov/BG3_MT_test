import { JsonValue } from "type-fest";
import { File } from "../file/File";

export type Texture = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  file: JsonValue;
  files?: Array<File>;
};
