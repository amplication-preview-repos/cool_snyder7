import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ColorConfigCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="textColor" source="textColor" />
      </SimpleForm>
    </Create>
  );
};
