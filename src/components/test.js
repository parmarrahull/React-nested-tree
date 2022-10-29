// import React from "react";
// import "antd/dist/antd.css";
// import { Table } from "antd";
// import { MinusCircleTwoTone, PlusCircleTwoTone } from "@ant-design/icons";

// const Test = () => {
//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Age",
//       dataIndex: "age",
//       key: "age",
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//       key: "address",
//     },
//   ];

//   const dataSource = [];
//   for (var index = 1; index < 7; index++) {
//     dataSource.push({
//       name: "Name" + index,
//       age: index,
//       address: "Addresh" + index,
//       description: "Description" + index,
//       companyName: "Company Name" + index,
//       companyStrength: index * index,
//     });
//   }
//   const nestedColumns = [
//     {
//       title: "Company Name",
//       dataIndex: "companyName",
//     },
//     {
//       title: "Company Name",
//       dataIndex: "companyName",
//     },
//   ];

//   return (
//     <>
//       <Table
//         dataSource={dataSource}
//         columns={columns}
//         expandable={{
//           rowExpandable: (record) => record.age < 6,
//           expandedRowRender: (record) => {
//             if (record.age === 4) {
//               return (
//                 <Table columns={nestedColumns} dataSource={dataSource}></Table>
//               );
//             }
//             return <p>{record.description}</p>;
//           },
//           defaultExpandAllRows: false,
//           defaultExpandedRowKeys: [],
//           expandRowByClick: true,
//           expandIcon: ({ expanded, onExpand, record }) => {
//             if (record.age >= 6) return null;
//             return expanded ? (
//               <MinusCircleTwoTone
//                 onClick={(e) => {
//                   onExpand(record, e);
//                 }}
//               />
//             ) : (
//               <PlusCircleTwoTone
//                 onClick={(e) => {
//                   onExpand(record, e);
//                 }}
//               />
//             );
//           },
//         }}
//       />
//       ;
//     </>
//   );
// };

// export default Test;