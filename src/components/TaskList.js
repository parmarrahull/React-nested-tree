import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";
import React from "react";

const TaskList = ({
  taskList,
  title,
  onChangeHandler,
  deleteData,
  copyItem,
}) => {
  // console.log("taskList", taskList);
  var Duplica = taskList.map((x) => x.id);
  {
    // console.log(Duplica);
  }

  var Duplica2 = taskList.map((x) => x.parentId);
  {
    // console.log(Duplica2);
  }

  var intersection = Duplica.filter(function (e) {
    return Duplica2.indexOf(e) > -1;
  });

  // console.log("match", intersection);

  return (
    <>
      <div className="row">
        <div style={{ backgroundColor: "whitesmoke" }}>
          {taskList.map((task) => {
            // console.log("taskList 2", taskList);
            return (
              <div className="form-check" key={task.id}>
                {/* {!intersection.length > 0 && ( */}
                  <>
                    <ul>
                      <li>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          checked={
                            title === "Completed Task List" ? true : false
                          }
                          id="flexCheckDefault"
                          onChange={(e) => onChangeHandler(e, task.id)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          <i style={{ margin: 5 }} className="fa fa-folder"></i>
                          {task.value}
                          {/* <div class="arrow">
                            <i class="fa fa-angle-down"></i>
                          </div> */}
                          <span
                            style={{
                              margin: 10,
                              marginLeft: 25,
                              cursor: "pointer",
                            }}
                            onClick={(e) => copyItem(e, task.id)}
                          >
                            <CopyOutlined />
                          </span>
                          {/* <button
                            className="btn btn-primary"
                            style={{ margin: 10 }}
                            onClick={(e) => copyItem(e, task.id)}
                          >
                            ©️
                          </button> */}

                          {/* <DeleteOutlined
                            onClick={() => {
                              deleteData(task.id);
                            }}
                            style={{ marginLeft: 20 }}
                          /> */}

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
                      </li>
                    </ul>
                  </>
                {/* )} */}

                {/* {intersection?.length > 0 && (
                  <ul>
                    <li>
                      <>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          checked={
                            title === "Completed Task List" ? true : false
                          }
                          id="flexCheckDefault"
                          onChange={(e) => onChangeHandler(e, task.id)}
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          <i  style={{ margin: 5 }}> ==={task.value}</i>
                          <span
                            style={{ margin: 10 }}
                            onClick={(e) => copyItem(e, task.id)}
                          >
                            <CopyOutlined />
                          </span> */}
                          {/* <button
                            className="btn btn-primary"
                            style={{ margin: 10 }}
                            onClick={(e) => copyItem(e, task.id)}
                          >
                            ©️
                          </button> */}

                          {/* <span
                            onClick={() => {
                              deleteData(task.id);
                            }}
                            style={{ marginLeft: 20 }}
                          >
                            <DeleteOutlined />
                          </span> */}

                          {/* <button
                            onClick={() => {
                              deleteData(task.id);
                            }}
                            style={{ marginLeft: 20 }}
                            type="button"
                            className="btn-sm btn-danger"
                          >
                            Delete
                          </button> */}
                        {/* </label>
                      </>
                    </li>
                  </ul>
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskList;
