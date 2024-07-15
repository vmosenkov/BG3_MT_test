import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TextureTitle } from "../texture/TextureTitle";
import { FolderTitle } from "../folder/FolderTitle";

export const FileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Type" source="typeField" />
        <ReferenceInput source="texture.id" reference="Texture" label="Texture">
          <SelectInput optionText={TextureTitle} />
        </ReferenceInput>
        <ReferenceInput source="folder.id" reference="Folder" label="Folder">
          <SelectInput optionText={FolderTitle} />
        </ReferenceInput>
        <SelectInput
          source="format"
          label="Format"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
