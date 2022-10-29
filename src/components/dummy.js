// import React from "react";

// export const Dummy = () => {
//   return (
//     <div class="folder-tree-wrapper">
//       <ul class="folder-tree">
//         <li>
//           <i class="fa fa-folder"></i> Task
//           <div class="arrow">
//             <i class="fa fa-angle-down"></i>
//           </div>
//           <ul>
//             <li>
//               <i class="fa fa-folder"></i> react
//             </li>
//             <li>
//               <i class="fa fa-folder"></i> c++
//             </li>
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Dummy;


// <table className="table">
//             {taskList.map((task) => {
//               console.log("taskList", taskList);
//               return (
//                 <div className="form-check" key={task.id}>
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     value=""
//                     checked={title === "Completed Task List" ? true : false}
//                     id="flexCheckDefault"
//                     onChange={(e) => onChangeHandler(e, task.id)}
//                   />
//                   <label className="form-check-label" for="flexCheckDefault">
//                     <tbody>
//                       <tr>
//                         <td> {task.value}</td>
//                         <button
//                           className="btn btn-primary"
//                           style={{ margin: 10 }}
//                           onClick={(e) => copyItem(e, task.id)}
//                         >
//                           ©️
//                         </button>
//                         <button
//                           onClick={() => {
//                             deleteData(task.id);
//                           }}
//                           style={{ marginLeft: 20 }}
//                           type="button"
//                           className="btn-sm btn-danger"
//                         >
//                           Delete
//                         </button>
//                       </tr>
//                     </tbody>
//                   </label>
//                 </div>
//               );
//             })}
//           </table>



// import React from "react";

// const TaskList = ({
//   taskList,
//   title,
//   onChangeHandler,
//   deleteData,
//   copyItem,
// }) => {
//   return (
//     <>
//       <div className="row">
//         <div style={{ backgroundColor: "whitesmoke" }}>
//           {taskList.map((task) => {
//             console.log("pareentId",task.parentId);
//             return (
//               <div className="form-check" key={task.id}>
//                 <ul>
//                   <li>
//                     {task.parentId === 0 && (
//                       <>
//                         <input
//                           className="form-check-input"
//                           type="checkbox"
//                           value=""
//                           checked={
//                             title === "Completed Task List" ? true : false
//                           }
//                           id="flexCheckDefault"
//                           onChange={(e) => onChangeHandler(e, task.id)}
//                         />
//                         <label
//                           className="form-check-label"
//                           for="flexCheckDefault"
//                         >
//                           <i class="fa fa-folder"></i> {task.value}
//                           {/* <div class="arrow">
//                             <i class="fa fa-angle-down"></i>
//                           </div> */}
                          
//                           <button
//                             className="btn btn-primary"
//                             style={{ margin: 10 }}
//                             onClick={(e) => copyItem(e, task.id)}
//                           >
//                             ©️
//                           </button>
//                           <button
//                             onClick={() => {
//                               deleteData(task.id);
//                             }}
//                             style={{ marginLeft: 20 }}
//                             type="button"
//                             className="btn-sm btn-danger"
//                           >
//                             Delete
//                           </button>
//                         </label>
//                       </>
//                     )}
//                     {task.parentId !== 0 && (
//                       <ul>
//                         <li>
//                           <>
//                             <input
//                               className="form-check-input"
//                               type="checkbox"
//                               value=""
//                               checked={
//                                 title === "Completed Task List" ? true : false
//                               }
//                               id="flexCheckDefault"
//                               onChange={(e) => onChangeHandler(e, task.id)}
//                             />
//                             <label
//                               className="form-check-label"
//                               for="flexCheckDefault"
//                             >
//                               <i> {task.value}</i>
//                               <button
//                                 className="btn btn-primary"
//                                 style={{ margin: 10 }}
//                                 onClick={(e) => copyItem(e, task.id)}
//                               >
//                                 ©️
//                               </button>
//                               <button
//                                 onClick={() => {
//                                   deleteData(task.id);
//                                 }}
//                                 style={{ marginLeft: 20 }}
//                                 type="button"
//                                 className="btn-sm btn-danger"
//                               >
//                                 Delete
//                               </button>
//                             </label>
//                           </>
//                         </li>
//                       </ul>
//                     )}
//                   </li>
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default TaskList;









// import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
// import React, { useState, useEffect } from "react";
// import uniqid from "uniqid";
// import TaskList from "./TaskList";

// const Homepage = () => {
//   const [taskInput, setTaskInput] = useState("");
//   const [taskList, setTaskList] = useState([]);
//   const [pendingTaskList, setPendingTaskList] = useState([]);
//   const [completedTaskList, setCompletedTaskList] = useState([]);
//   const [showPending, setShowPending] = useState(true);
//   const [selectTask, setSelectTask] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   const handleClick = (event) => {
//     // 👇️ toggle isActive state on click
//     setIsActive((current) => !current);
//   };

//   // Completed Task List And Pending Task List
//   useEffect(() => {
//     const pendingTasks = taskList.filter((task) => task.isPending === true);
//     setPendingTaskList(pendingTasks);
//     const completedTasks = taskList.filter((task) => task.isPending === false);
//     setCompletedTaskList(completedTasks);
//     // console.log("Completed Task List", completedTasks);
//   }, [taskList]);

//   console.log(taskList);
//   let itemEvent = (e) => {
//     setTaskInput(e.target.value);
//   };

//   let selectTasks = (event) => {
//     setSelectTask(event.target.value);
//   };

//   // let Mapping =()=>{
//   //   taskList.map(x=>x.id)
//   // }
//   // console.log(Mapping())

//   // Input Task Data And save
//   const listOfTask = () => {
//     if (taskInput) {
//       setTaskList([
//         ...taskList,
//         {
//           id: uniqid(),
//           isPending: true,
//           parentId: selectTask.toString(),
//           value: taskInput,
//           date: new Date().toLocaleString(),
//         },
//       ]);
//       setTaskInput("");
//     } else {
//       alert("Enter the task");
//     }
//   };
//   // console.log("taskList", taskList);
//   const handleCheckboxTask = (e, id) => {
//     if (e.target.checked) {
//       const updatedTaskList = taskList.map((itemvalue) => {
//         if (itemvalue.id === id) {
//           return { ...itemvalue, isPending: false };
//         } else {
//           return itemvalue;
//         }
//       });
//       setTaskList(updatedTaskList);
//     } else {
//       const updatedTaskList = taskList.map((itemvalue) => {
//         if (itemvalue.id === id) {
//           return { ...itemvalue, isPending: true };
//         } else {
//           return itemvalue;
//         }
//       });
//       setTaskList(updatedTaskList);
//     }
//   };

//   const deleteItems = (id) => {
//     const result = taskList.filter((obj) => {
//       return obj.id !== id;
//     });
//     setTaskList(result);
//   };

//   const onSortAsc = () => {
//     const ascending = [...taskList].sort((a, b) => (a.date < b.date ? -1 : 1));
//     setTaskList(ascending);
//   };

//   const onSortDesc = () => {
//     const descending = [...taskList].reverse((a, b) =>
//       a.date < b.date ? -1 : 1
//     );
//     setTaskList(descending);
//   };

//   const copyTask = (e, id) => {
//     e.preventDefault();
//     let copy = taskList.find((e) => e.id === id);
//     const { value } = copy;
//     {
//       copy.isPending === true
//         ? setTaskList([
//             {
//               id: uniqid.process(),
//               isPending: true,
//               parentId: selectTask.toString(),
//               value: value,
//               date: new Date().toLocaleString(),
//             },
//             ...taskList,
//           ])
//         : setTaskList([
//             {
//               id: uniqid.process(),
//               isPending: false,
//               value: value,
//               parentId: selectTask.toString(),
//               date: new Date().toLocaleString(),
//             },
//             ...taskList,
//           ]);
//     }
//   };

//   return (
//     <>
//       <h1 style={{ textAlign: "center", marginTop: 20 }}>TO Do List</h1>
//       <div style={{ margin: 10 }}>
//         <div className="row" style={{ justifyContent: "center" }}>
//           <div
//             style={{ backgroundColor: "whitesmoke" }}
//             className="col-sm-6 mt-5"
//           >
//             <form>
//               <div>
//                 <select id="selecttask" onChange={selectTasks}>
//                   <option value="0">Select Task</option>
//                   {taskList.map((data) => (
//                     <option key={data.id} value={data.id}>
//                       {data.value}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* <div class="form-group col-6">
//                 <label for="categoryCheck">Task</label>
//                 <span class="important"></span>

//                 {taskList.map((elm) => {
//                   return ( 
//                     <select
//                       style={{ padding: 10, width: 300 }}
//                       value={selectTask}
//                       id="selecttask"
//                       onChange={selectTasks}
//                     >
//                        <option value="0">Select Task</option>
//                        {taskList.map(data => (
//                       <option key={data.id} value={data.id}>{data.value}</option>
//                        )}
//                       <option>Task2</option>
//                       <option>Task3</option>
//                       <option>Task4</option>
//                     </select>
//                   );
//                 })}
//               </div> */}
//               <br />

//               <input
//                 style={{ marginTop: 20 }}
//                 onChange={itemEvent}
//                 value={taskInput}
//                 className="form-control form-control-lg"
//                 type="text"
//                 placeholder="Add Task"
//                 aria-label=".form-control-lg example"
//               ></input>
//               <div style={{ marginTop: 20 }}>
//                 <button
//                   onClick={listOfTask}
//                   type="button"
//                   className="btn btn-primary"
//                 >
//                   Add
//                 </button>
//               </div>
//             </form>

//             <button
//               style={{ margin: 10 }}
//               onClick={() => {
//                 setShowPending(true);
//                 handleClick();
//               }}
//               type="button"
//               // className="btn btn-secondary"
//               className={isActive ? "" : "bg-salmon"}
//             >
//               Pending Task List
//               <CaretUpOutlined onClick={onSortAsc} />
//               <CaretDownOutlined onClick={onSortDesc} />
//             </button>

//             <button
//               style={{ margin: 10 }}
//               onClick={() => {
//                 setShowPending(false);
//                 handleClick();
//               }}
//               type="button"
//               // className="btn btn-secondary"
//               className={isActive ? "bg-salmon" : ""}
//             >
//               Completed Task List
//               <CaretUpOutlined onClick={onSortAsc} />
//               <CaretDownOutlined onClick={onSortDesc} />
//             </button>

//             <div style={{ margin: 20 }}>
//               {/* {showPending ? ( */}
//               <TaskList
//                 taskList={showPending ? pendingTaskList : completedTaskList}
//                 title={
//                   showPending ? "Pending Task List" : "Completed Task List"
//                 }
//                 onChangeHandler={handleCheckboxTask}
//                 deleteData={deleteItems}
//                 copyItem={copyTask}
//                 data={taskList}
//               />
//               {/* )  */}

//               {/* : (
//                 <TaskList
//                   taskList={completedTaskList}
//                   title={"Completed Task List"}
//                   onChangeHandler={handleCheckboxTask}
//                   deleteData={deleteItems}
//                   copyItem={copyTask}
//                 />
//               )} */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Homepage;
