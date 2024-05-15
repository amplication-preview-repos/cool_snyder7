import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ImageConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="backgroundColor" source="backgroundColor" />
        <NumberInput step={1} label="height" source="height" />
        <NumberInput step={1} label="width" source="width" />
      </SimpleForm>
    </Edit>
  );
};
