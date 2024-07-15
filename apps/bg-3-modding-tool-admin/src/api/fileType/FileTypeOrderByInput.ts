import { SortOrder } from "../../util/SortOrder";

export type FileTypeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
};
