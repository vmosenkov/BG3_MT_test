import { FileUpdateManyWithoutFoldersInput } from "./FileUpdateManyWithoutFoldersInput";

export type FolderUpdateInput = {
  name?: string | null;
  files?: FileUpdateManyWithoutFoldersInput;
};
