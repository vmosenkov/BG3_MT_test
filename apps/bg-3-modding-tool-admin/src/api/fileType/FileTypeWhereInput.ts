import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FileTypeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
