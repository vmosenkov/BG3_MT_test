import { SortOrder } from "../../util/SortOrder";

export type TextureOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  file?: SortOrder;
};
