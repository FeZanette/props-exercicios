// export function InfosUsuario(props) {
//     return (
//       <div>
//         <img src={props.userImage} alt="imagem usuário" />
//         <h4>{props.userName}</h4>
//       </div>
//     );
//   }

export function InfosUsuario(props) {
  return (
    <div className="container-usuario">
      <img src={props.userImage} alt="imagem usuário" />
      <h4>{props.userName}</h4>
    </div>
  );
}
