import { useState } from "react";
import { Treebeard } from "react-treebeard";
import data from "./data";

const TreeExample = () => {
  const [dataState, setDataState] = useState(data);
  const [cursor, setCursor] = useState(false);

  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setDataState(Object.assign({}, data));
  };

  return <Treebeard data={dataState} onToggle={onToggle} />;
};

export default TreeExample;
