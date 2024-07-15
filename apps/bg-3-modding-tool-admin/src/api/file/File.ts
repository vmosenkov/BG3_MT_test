import { Texture } from "../texture/Texture";
import { Folder } from "../folder/Folder";

export type File = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  typeField: string | null;
  texture?: Texture | null;
  folder?: Folder | null;
  format?: "Option1" | null;
};
