import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";

export type FolderWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  files?: FileListRelationFilter;
};
