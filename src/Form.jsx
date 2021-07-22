/* eslint-disable linebreak-style */
// import React, { useState } from "react";

// export default function LoginForm() {
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = () => {
//     alert(`{login}, добро пожаловать!`);
//   };

//   const onChangePassword = () => {
//     setPassword({ password });
//     console.log({ password });
//   };

//   const onChangeLogin = () => {
//     setLogin({ login });
//     console.log({ login });
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         width: "100vw",
//         display: "grid",
//         placeItems: "center"
//       }}
//     >
//       <form
//         style={{
//           width: 200,
//           display: "flex",
//           flexDirection: "column"
//         }}
//         onSubmit={onSubmit}
//       >
//         <p>
//           <label>
//             {""}Логин:{""}
//             <input
//               type="text"
//               name="login"
//               value={login}
//               onChange={onChangeLogin}
//             />
//           </label>
//         </p>
//         <p>
//           <label>
//             {""}Пароль:{""}
//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={onChangePassword}
//             />
//           </label>
//         </p>
//         <p>
//           <input type="submit" value="Submit" />
//         </p>
//       </form>
//     </div>
//   );
// }

// // ReactDOM.render(<LoginForm />,  document.getElementById('root'));
