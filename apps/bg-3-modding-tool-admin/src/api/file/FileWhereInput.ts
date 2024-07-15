import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TextureWhereUniqueInput } from "../texture/TextureWhereUniqueInput";
import { FolderWhereUniqueInput } from "../folder/FolderWhereUniqueInput";

export type FileWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
  texture?: TextureWhereUniqueInput;
  folder?: FolderWhereUniqueInput;
  format?: "Option1";
};
