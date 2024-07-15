import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";

export type TextureWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  file?: JsonFilter;
  files?: FileListRelationFilter;
};
