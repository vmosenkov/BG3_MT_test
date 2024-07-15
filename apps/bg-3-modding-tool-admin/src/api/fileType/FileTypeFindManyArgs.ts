import { FileTypeWhereInput } from "./FileTypeWhereInput";
import { FileTypeOrderByInput } from "./FileTypeOrderByInput";

export type FileTypeFindManyArgs = {
  where?: FileTypeWhereInput;
  orderBy?: Array<FileTypeOrderByInput>;
  skip?: number;
  take?: number;
};
