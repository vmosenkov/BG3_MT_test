import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const FileTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
