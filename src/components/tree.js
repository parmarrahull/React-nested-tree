// import { Table } from "antd";
import React from "react";
import Tree from "react-animated-tree";

// const treeStyles = {
//   position: "absolute",
//   top: 40,
//   left: 40,
//   color: "black",
//   fill: "black",
//   width: "100%",
// };

// const typeStyles = {
//   fontSize: "2em",
//   verticalAlign: "middle",
// };

const Trees = () => {
  var array = ["A.A1.A2", "A.A1.A3", "A.B1.B2", "B.B1.B2", "C.C1.C2"],
    tree = [],
    levels = [tree],
    last = [];

  array.forEach((s) => {
    var temp = s.split(".");
    temp.forEach((name, i) => {
      if (last[i] === name) return;
      levels[i].push({ name, children: (levels[i + 1] = []) });
    });
    last = temp;
  });

  console.log(tree);

  return;
};

export default Trees;

{
  /* <Tree content="main" type="ITEM" canHide open style={treeStyles}>
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
 */
}

// var arr = [
//   {
//     id: 1,
//     title: "hello",
//     parent: 0,
//     children: [
//       {
//         id: 3,
//         title: "hello",
//         parent: 1,
//         children: [
//           {
//             id: 4,
//             title: "hello",
//             parent: 3,
//             children: [
//               { id: 5, title: "hello", parent: 4, children: [] },
//               { id: 6, title: "hello", parent: 4, children: [] },
//             ],
//           },
//           { id: 7, title: "hello", parent: 3, children: [] },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "hello",
//     parent: 0,
//     children: [{ id: 8, title: "hello", parent: 2, children: [] }],
//   },
// ];

// var result = [];
// var convertArrToObj = (arr) => {
//   arr.forEach((e) => {
//     if (e.children) {
//       result.push({
//         id: e.id,
//         title: e.title,
//         parent: e.parent,
//       });
//       convertArrToObj(e.children);
//     } else result.push(e);
//   });
// };
// convertArrToObj(arr);
// console.log(result);

let item = newState.find((data) => data.id == parentId);
let index = newState.indexOf(item);

console.log(index);

newState[index].children = [...newState[index].children];

const array = [
  {
    id: 1,
    name: "bla",
    todo: [
      {
        id: 2,
        name: "2 data",
        todo2: [
          {
            id: 3,
            name: "3 data",
          },
        ],
      },
    ],
    id: 4,
    name: "newData",
  },
];
