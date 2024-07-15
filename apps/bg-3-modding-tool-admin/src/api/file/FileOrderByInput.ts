import { SortOrder } from "../../util/SortOrder";

export type FileOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  textureId?: SortOrder;
  folderId?: SortOrder;
  format?: SortOrder;
};
