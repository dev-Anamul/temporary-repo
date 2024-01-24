import React, { useEffect, useState } from "react";

// Define a basic TreeNode component to represent individual nodes
function TreeNode({ label, children, searchText, isCheckbox, node }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSelect = (node) => {
    console.log(node);
    console.log("handleSelect");
  };

  //   label.includes(searchText)
  useEffect(() => {
    if (
      searchText !== "" &&
      searchText
        ?.split("")
        ?.some((val) => label?.toLowerCase()?.includes(val?.toLowerCase()))
    ) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  }, [searchText, label]);

  return (
    <div>
      <label onClick={isCheckbox ? () => handleSelect(node) : toggleExpansion}>
        {isCheckbox ? (
          <input type="checkbox" />
        ) : !isCheckbox && isExpanded ? (
          <span>▼</span>
        ) : (
          <span>►</span>
        )}
        {label}
        {/* {!isCheckbox && isExpanded ? "▼" : "►"} {label} */}
      </label>
      {isExpanded && (
        <div style={{ marginLeft: "20px" }}>
          {/* {children ? ( */}
          {children}
          {/* ) : (
            <div style={{ color: "gray" }}>No children available</div>
          )} */}
        </div>
      )}
    </div>
  );
}

// Define the TreeView component to represent the entire tree
function TreeView({ data, searchText }) {
  return (
    <div>
      {data.map((node, index) => (
        <TreeNode
          key={index}
          label={node.label}
          searchText={searchText}
          isCheckbox={node?.children?.length == 0}
          node={{ ...node, children: [] }}
        >
          {node.children && (
            <TreeView data={node.children} searchText={searchText} />
          )}
        </TreeNode>
      ))}
    </div>
  );
}

// Example usage:
const treeData = [
  {
    label: "Node 1",
    children: [
      { label: "Node 1.1", children: [], isCheckbox: false },
      {
        label: "Node 1.2",
        children: [
          { label: "Node 1.2.1", children: [], isCheckbox: true },
          { label: "Node 1.2.2", children: [], isCheckbox: false },
        ],
      },
    ],
  },
  { label: "Node 2", children: [], isCheckbox: false },
  { label: "Node 3", children: [], isCheckbox: true },
];

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <h1>Tree View Example</h1>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div style={{ marginTop: "50px" }} />
      <TreeView data={treeData} searchText={searchText} />
    </div>
  );
}

export default App;
