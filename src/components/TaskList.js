import { CopyOutlined, DeleteOutlined } from "@ant-design/icons";

const TaskList = ({
  taskList,
  title,
  onChangeHandler,
  deleteData,
  copyItem,
}) => {
  const group = (items, fn) =>
    items.reduce((prev, next) => {
      const prop = fn(next) || "global___array";
      // console.log("child",child);
      return {
        ...prev,
        [prop]: prev[prop] ? [...prev[prop], next] : [next],
      };
     
    }, {});
  function recursiveTodo(array) {
    
    return array?.map((task) => {
      return (
        <div key={task.id} style={{ marginLeft: "10px" }}>
          <input
            className="mt-3"
            type="checkbox"
            value=""
            checked={title === "Completed Task List" ? true : false}
            onChange={(e) => onChangeHandler(e, task.id)}
          />

          <span style={{ marginLeft: "0.5%" }}>{task.value}</span>
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

          <DeleteOutlined
            onClick={() => {
              deleteData(task.id);
            }}
            style={{ marginLeft: 20 }}
          />

          {recursiveTodo(categoriesedList[task.id])}
        </div>
      );
    });
  }
  const categoriesedList = group(taskList, (e) => e?.category);
  console.log("categoriesedList", categoriesedList);
  console.log("tasklist", taskList);
  return (
    <>
      <div className="">{recursiveTodo(categoriesedList.global___array)}</div>
    </>
  );

 };

export default TaskList;
