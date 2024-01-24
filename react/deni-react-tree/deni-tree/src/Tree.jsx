import { Component } from "react";
import "./TreeView.css"; // Add your custom CSS for styling

// class CheckboxTree extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { nodes: props.nodes };
//   }

//   handleNodeCheck = (nodeId) => {
//     const updatedNodes = this.updateNodeCheckState(this.state.nodes, nodeId);
//     this.setState({ nodes: updatedNodes });
//   };

//   updateNodeCheckState = (nodes, nodeId) => {
//     return nodes.map((node) => {
//       if (node.id === nodeId) {
//         const checked = !node.checked;
//         return {
//           ...node,
//           checked,
//           children: this.updateChildrenCheckState(node.children, checked),
//         };
//       }
//       if (node.children) {
//         return {
//           ...node,
//           children: this.updateNodeCheckState(node.children, nodeId),
//         };
//       }
//       return node;
//     });
//   };
//   handleNodeToggle = (nodeId) => {
//     const updatedNodes = this.updateNodeToggleState(this.state.nodes, nodeId);
//     this.setState({ nodes: updatedNodes });
//   };

//   updateChildrenCheckState = (children, checked) => {
//     return children?.map((child) => ({
//       ...child,
//       checked,
//       children: this.updateChildrenCheckState(child.children, checked),
//     }));
//   };

//   updateNodeToggleState = (nodes, nodeId) => {
//     return nodes.map(node => {
//       if (node.id === nodeId) {
//         return { ...node, toggled: !node.toggled };
//       }
//       if (node.children) {
//         return { ...node, children: this.updateNodeToggleState(node.children, nodeId) };
//       }
//       return node;
//     });
//   };

//   renderTreeNodes = (nodes) => {
//     return nodes.map((node) => (
//       <div key={node.id} className="tree-node">
//         <label>
//           <input
//             type="checkbox"
//             checked={node.checked}
//             onChange={() => this.handleNodeCheck(node.id)}
//           />
//           {node.label}
//         </label>
//         {node.children && this.renderTreeNodes(node.children)}
//       </div>
//     ));
//   };

//   render() {
//     const { nodes } = this.state;

//     return <div className="checkbox-tree">{this.renderTreeNodes(nodes)}</div>;
//   }
// }

// export default CheckboxTree;

///////////
// import React, { Component } from "react";
// import "./CheckboxTree.css"; // Add your custom CSS for styling

class CheckboxTree extends Component {
  constructor(props) {
    super(props);
    this.state = { nodes: props.nodes };
  }

  handleNodeCheck = (nodeId) => {
    const updatedNodes = this.updateNodeCheckState(this.state.nodes, nodeId);
    this.setState({ nodes: updatedNodes });
  };

  handleNodeToggle = (nodeId) => {
    const updatedNodes = this.updateNodeToggleState(this.state.nodes, nodeId);
    this.setState({ nodes: updatedNodes });
  };

  updateNodeCheckState = (nodes, nodeId) => {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        const checked = !node.checked;
        return {
          ...node,
          checked,
          children: this.updateChildrenCheckState(node.children, checked),
        };
      }
      if (node.children) {
        return {
          ...node,
          children: this.updateNodeCheckState(node.children, nodeId),
        };
      }
      return node;
    });
  };

  updateChildrenCheckState = (children, checked) => {
    return children?.map((child) => ({
      ...child,
      checked,
      children: this.updateChildrenCheckState(child.children, checked),
    }));
  };
  updateNodeToggleState = (nodes, nodeId) => {
    return nodes.map((node) => {
      if (node.id === nodeId) {
        return { ...node, toggled: !node.toggled };
      }
      if (node.children) {
        return {
          ...node,
          children: this.updateNodeToggleState(node.children, nodeId),
        };
      }
      return node;
    });
  };

  renderTreeNodes = (nodes) => {
    return nodes.map((node) => (
      <div key={node.id} className="tree-node">
        <label>
          <span
            className={`toggle-icon ${node.toggled ? "expanded" : "collapsed"}`}
            onClick={() => this.handleNodeToggle(node.id)}
          ></span>
          <input
            type="checkbox"
            checked={node.checked}
            onChange={() => this.handleNodeCheck(node.id)}
          />
          {node.label}
        </label>
        {node.toggled && node.children && (
          <div className="child-nodes">
            {this.renderTreeNodes(node.children)}
          </div>
        )}
      </div>
    ));
  };

  render() {
    const { nodes } = this.state;

    return <div className="checkbox-tree">{this.renderTreeNodes(nodes)}</div>;
  }
}

export default CheckboxTree;
