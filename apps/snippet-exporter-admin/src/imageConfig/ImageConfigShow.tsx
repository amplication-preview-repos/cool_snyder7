import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ImageConfigShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="backgroundColor" source="backgroundColor" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="height" source="height" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="width" source="width" />
      </SimpleShowLayout>
    </Show>
  );
};
