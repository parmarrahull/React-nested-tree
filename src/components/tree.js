// import { Table } from "antd";
import React from "react";
import Tree from "react-animated-tree";

const treeStyles = {
  position: "absolute",
  top: 40,
  left: 40,
  color: "black",
  fill: "black",
  width: "100%",
};

const typeStyles = {
  fontSize: "2em",
  verticalAlign: "middle",
};

const Trees = () => {
  return (
    <div className="row">
      <div style={{ backgroundColor: "whitesmoke" }}>
        {taskList.map((task) => {
          <Tree content="main" type="ITEM" canHide open style={treeStyles}>
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              checked={title === "Completed Task List" ? true : false}
              id="flexCheckDefault"
              onChange={(e) => onChangeHandler(e, task.id)}
            />
            <label className="form-check-label" for="flexCheckDefault">
              <i className="fa fa-folder"></i>
              {task.value}
              <span
                style={{ margin: 10 }}
                onClick={(e) => copyItem(e, task.id)}
              >
                <CopyOutlined />
              </span>
              <button
                onClick={() => {
                  deleteData(task.id);
                }}
                style={{ marginLeft: 20 }}
                type="button"
                className="btn-sm btn-danger"
              >
                Delete
              </button>
            </label>
            {intersection?.length > 0 && (
              <Tree
                content="hello"
                type={<span style={typeStyles}>🙀{task.value}</span>}
                canHide
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  checked={title === "Completed Task List" ? true : false}
                  id="flexCheckDefault"
                  onChange={(e) => onChangeHandler(e, task.id)}
                />
                <label className="form-check-label" for="flexCheckDefault">
                  <i> ===</i>
                  <span
                    style={{ margin: 10 }}
                    onClick={(e) => copyItem(e, task.id)}
                  >
                    <CopyOutlined />
                  </span>

                  <button
                    onClick={() => {
                      deleteData(task.id);
                    }}
                    style={{ marginLeft: 20 }}
                    type="button"
                    className="btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </label>
              </Tree>
            )}
          </Tree>;
        })}
      </div>
    </div>
  );
};

export default Trees;

<Tree content="main" type="ITEM" canHide open style={treeStyles}>
  <Tree content="hello" type={<span style={typeStyles}>🙀</span>} canHide />
  <Tree content="subtree with children" canHide>
    <Tree content="hello" />
    <Tree content="sub-subtree with children">
      <Tree content="child 1" style={{ color: "#63b1de" }} />
      <Tree content="child 2" style={{ color: "#63b1de" }} />
      <Tree content="child 3" style={{ color: "#63b1de" }} />
    </Tree>
    <Tree content="hello" />
  </Tree>
  <Tree content="hello" canHide />
  <Tree content="hello" canHide />
</Tree>;
