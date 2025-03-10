import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
