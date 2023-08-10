// import { InfosUsuario } from "./InfosUsuario";

// export function reproduzVideo() {
//   alert("O vídeo está sendo reproduzido");
// }

// export function CardVideo(props) {

//   return (
//     <div>
//       <div className="box-pagina-principal" onClick={reproduzVideo}>

//         <img src={props.image} alt="" />
//         <h4>{props.title}</h4>
//         <InfosUsuario userImage={props.userImage} userName={props.userName} />
//       </div>
//     </div>
//   );
// }

import { InfosUsuario } from "./InfosUsuario";

export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props) {
  // recebendo as props
  return (
    <div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        
        {/* Utilizando props no JSX */}
        <img src={props.image} alt="" />
        <h4>{props.title}</h4>

        {/* Repassando props para o componente InfosUsuario */}
        <InfosUsuario userImage={props.userImage} userName={props.userName} />
      </div>
    </div>
  );
}