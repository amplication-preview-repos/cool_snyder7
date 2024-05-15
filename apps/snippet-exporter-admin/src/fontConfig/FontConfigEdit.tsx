import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FontConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fontFamily" source="fontFamily" />
        <NumberInput step={1} label="fontSize" source="fontSize" />
      </SimpleForm>
    </Edit>
  );
};
