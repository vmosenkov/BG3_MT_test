import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FolderList } from "./folder/FolderList";
import { FolderCreate } from "./folder/FolderCreate";
import { FolderEdit } from "./folder/FolderEdit";
import { FolderShow } from "./folder/FolderShow";
import { FileList } from "./file/FileList";
import { FileCreate } from "./file/FileCreate";
import { FileEdit } from "./file/FileEdit";
import { FileShow } from "./file/FileShow";
import { ItemList } from "./item/ItemList";
import { ItemCreate } from "./item/ItemCreate";
import { ItemEdit } from "./item/ItemEdit";
import { ItemShow } from "./item/ItemShow";
import { FileTypeList } from "./fileType/FileTypeList";
import { FileTypeCreate } from "./fileType/FileTypeCreate";
import { FileTypeEdit } from "./fileType/FileTypeEdit";
import { FileTypeShow } from "./fileType/FileTypeShow";
import { TextureList } from "./texture/TextureList";
import { TextureCreate } from "./texture/TextureCreate";
import { TextureEdit } from "./texture/TextureEdit";
import { TextureShow } from "./texture/TextureShow";
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
        title={"BG3 Modding Tool"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Folder"
          list={FolderList}
          edit={FolderEdit}
          create={FolderCreate}
          show={FolderShow}
        />
        <Resource
          name="File"
          list={FileList}
          edit={FileEdit}
          create={FileCreate}
          show={FileShow}
        />
        <Resource
          name="Item"
          list={ItemList}
          edit={ItemEdit}
          create={ItemCreate}
          show={ItemShow}
        />
        <Resource
          name="FileType"
          list={FileTypeList}
          edit={FileTypeEdit}
          create={FileTypeCreate}
          show={FileTypeShow}
        />
        <Resource
          name="Texture"
          list={TextureList}
          edit={TextureEdit}
          create={TextureCreate}
          show={TextureShow}
        />
      </Admin>
    </div>
  );
};

export default App;
