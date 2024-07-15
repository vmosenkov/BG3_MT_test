import { FileCreateNestedManyWithoutFoldersInput } from "./FileCreateNestedManyWithoutFoldersInput";

export type FolderCreateInput = {
  name?: string | null;
  files?: FileCreateNestedManyWithoutFoldersInput;
};
