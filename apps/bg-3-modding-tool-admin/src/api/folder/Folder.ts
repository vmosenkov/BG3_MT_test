import { File } from "../file/File";

export type Folder = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  files?: Array<File>;
};
