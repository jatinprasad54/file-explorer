import { useState } from "react";
import "./App.css";
import Folder from "./component/Folder";
import { explorer } from "./data/folderData";
import { useAddData } from "./custom-hooks/useAddData";
function App() {
  const { insertData } = useAddData();
  const [explorerData, setExplorerData] = useState(explorer);

  const changeExplorerData = (id, name, isFolder) => {
    const newExplorerData = insertData(explorerData, name, id, isFolder);
    setExplorerData(newExplorerData);
  };
  return (
    <div className="App">
      <Folder
        folderData={explorerData}
        changeExplorerData={changeExplorerData}
      />
    </div>
  );
}

export default App;
