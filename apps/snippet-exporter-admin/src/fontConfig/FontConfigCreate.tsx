import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FontConfigCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fontFamily" source="fontFamily" />
        <NumberInput step={1} label="fontSize" source="fontSize" />
      </SimpleForm>
    </Create>
  );
};
