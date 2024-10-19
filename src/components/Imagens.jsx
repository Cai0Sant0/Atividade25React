import imagemSol from '../assets/imgPorSol.jpg';
import imgFazenda from '../assets/fazenda.jpg';

function Imagem(props){
    return <img src={props.url} alt="Imagem aletória" />
}
  
  function Imagens() {
    const urlImgs = [imgFazenda,"",imagemSol,"","", imagemSol,"",""];
    return (
      <>
        <h1>Imagens renderizadas de um array</h1>
        <ul>
          {urlImgs.map((img)=>{
            if(img != ""){
                return <Imagem url={img} />
            }
          })}
        </ul>
      </>
    );
  }

export default Imagens