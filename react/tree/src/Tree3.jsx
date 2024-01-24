import React, { useState } from "react";

// Define a basic TreeNode component to represent individual nodes
function TreeNode({ label, children, isExpanded, onToggle }) {
  return (
    <div>
      <span onClick={onToggle}>
        {isExpanded ? "▼" : "►"} {label}
      </span>
      {isExpanded && (
        <div style={{ marginLeft: "20px" }}>
          {children ? (
            children
          ) : (
            <div style={{ color: "gray" }}>No children available</div>
          )}
        </div>
      )}
    </div>
  );
}

// Define the TreeView component to represent the entire tree
function TreeView({ data, searchText }) {
  return (
    <div>
      {data.map((node, index) => {
        const isMatching = node.label
          .toLowerCase()
          .includes(searchText.toLowerCase());
        const hasChildren = node.children && node.children.length > 0;

        return (
          <TreeNode
            key={index}
            label={node.label}
            isExpanded={isMatching || hasChildren}
            onToggle={() => {}}
          >
            {isMatching && (
              <TreeView data={node.children || []} searchText={searchText} />
            )}
          </TreeNode>
        );
      })}
    </div>
  );
}

// Example usage:
const treeData = [
  {
    label: "Node 1",
    children: [
      { label: "Node 1.1" },
      {
        label: "Node 1.2",
        children: [{ label: "Node 1.2.1" }, { label: "Node 1.2.2" }],
      },
    ],
  },
  { label: "Node 2" },
  { label: "Node 3" },
];

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <h1>Tree View Example</h1>
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <TreeView data={treeData} searchText={searchText} />
    </div>
  );
}

export default App;
