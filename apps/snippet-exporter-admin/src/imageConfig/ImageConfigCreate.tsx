import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ImageConfigCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="backgroundColor" source="backgroundColor" />
        <NumberInput step={1} label="height" source="height" />
        <NumberInput step={1} label="width" source="width" />
      </SimpleForm>
    </Create>
  );
};
