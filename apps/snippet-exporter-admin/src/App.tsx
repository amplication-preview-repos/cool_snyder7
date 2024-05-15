import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ImageConfigList } from "./imageConfig/ImageConfigList";
import { ImageConfigCreate } from "./imageConfig/ImageConfigCreate";
import { ImageConfigEdit } from "./imageConfig/ImageConfigEdit";
import { ImageConfigShow } from "./imageConfig/ImageConfigShow";
import { SnippetList } from "./snippet/SnippetList";
import { SnippetCreate } from "./snippet/SnippetCreate";
import { SnippetEdit } from "./snippet/SnippetEdit";
import { SnippetShow } from "./snippet/SnippetShow";
import { ColorConfigList } from "./colorConfig/ColorConfigList";
import { ColorConfigCreate } from "./colorConfig/ColorConfigCreate";
import { ColorConfigEdit } from "./colorConfig/ColorConfigEdit";
import { ColorConfigShow } from "./colorConfig/ColorConfigShow";
import { FontConfigList } from "./fontConfig/FontConfigList";
import { FontConfigCreate } from "./fontConfig/FontConfigCreate";
import { FontConfigEdit } from "./fontConfig/FontConfigEdit";
import { FontConfigShow } from "./fontConfig/FontConfigShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SnippetExporter"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ImageConfig"
          list={ImageConfigList}
          edit={ImageConfigEdit}
          create={ImageConfigCreate}
          show={ImageConfigShow}
        />
        <Resource
          name="Snippet"
          list={SnippetList}
          edit={SnippetEdit}
          create={SnippetCreate}
          show={SnippetShow}
        />
        <Resource
          name="ColorConfig"
          list={ColorConfigList}
          edit={ColorConfigEdit}
          create={ColorConfigCreate}
          show={ColorConfigShow}
        />
        <Resource
          name="FontConfig"
          list={FontConfigList}
          edit={FontConfigEdit}
          create={FontConfigCreate}
          show={FontConfigShow}
        />
      </Admin>
    </div>
  );
};

export default App;
