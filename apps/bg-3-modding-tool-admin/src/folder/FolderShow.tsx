import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TEXTURE_TITLE_FIELD } from "../texture/TextureTitle";
import { FOLDER_TITLE_FIELD } from "./FolderTitle";

export const FolderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Name" source="name" />
        <ReferenceManyField reference="File" target="folderId" label="Files">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Name" source="name" />
            <TextField label="Type" source="typeField" />
            <ReferenceField
              label="Texture"
              source="texture.id"
              reference="Texture"
            >
              <TextField source={TEXTURE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Folder"
              source="folder.id"
              reference="Folder"
            >
              <TextField source={FOLDER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Format" source="format" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
