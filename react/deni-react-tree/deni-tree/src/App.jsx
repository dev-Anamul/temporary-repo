import "./App.css";
import CheckboxTree from "./Tree";
import MultiSelectDirectoryTreeView from "./Tree2";

function App() {
  const treeData = [
    {
      id: 1,
      label: "Node 1",
      checked: false,
      children: [
        { id: 2, label: "Node 1.1", checked: false },
        { id: 3, label: "Node 1.2", checked: false },
      ],
    },
    {
      id: 4,
      label: "Node 2",
      checked: false,
      children: [
        { id: 5, label: "Node 2.1", checked: false },
        {
          id: 6,
          label: "Node 2.2",
          checked: false,
          children: [
            { id: 7, label: "Node 2.2.1", checked: false },
            { id: 8, label: "Node 2.2.2", checked: false },
          ],
        },
      ],
    },
  ];
  return (
    <div className="app">
      <h1>Custom Checkbox Tree</h1>
      <CheckboxTree nodes={treeData} />
      <MultiSelectDirectoryTreeView />
    </div>
  );
}

export default App;
