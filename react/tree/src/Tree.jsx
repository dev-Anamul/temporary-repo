import React, { useState } from 'react';

// Define a basic TreeNode component to represent individual nodes
function TreeNode({ label, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <span onClick={toggleExpansion}>
        {isExpanded ? '▼' : '►'} {label}
      </span>
      {isExpanded && <div style={{ marginLeft: '20px' }}>{children}</div>}
    </div>
  );
}

// Define the TreeView component to represent the entire tree
function TreeView({ data }) {
  return (
    <div>
      {data.map((node, index) => (
        <TreeNode key={index} label={node.label}>
          {node.children && <TreeView data={node.children} />}
        </TreeNode>
      ))}
    </div>
  );
}

// Example usage:
const treeData = [
  {
    label: 'Node 1',
    children: [
      { label: 'Node 1.1' },
      {
        label: 'Node 1.2',
        children: [
          { label: 'Node 1.2.1' },
          { label: 'Node 1.2.2' },
        ],
      },
    ],
  },
  { label: 'Node 2' },
];

function App() {
  return (
    <div>
      <h1>Tree View Example</h1>
      <TreeView data={treeData} />
    </div>
  );
}

export default App;