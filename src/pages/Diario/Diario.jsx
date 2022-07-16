import { BsArrowReturnRight } from "react-icons/bs";
import Header from "../../components/Header/Header";
import image from "../../assets/diario.svg";

import "./diario.css";

const list = [
  {
    id: 1,
    nome: "Portfolio na Reprograma",
    descricao:
      "Um site com conteúdos de introdução à programação, usando React.",
    imagem: "https://media.giphy.com/media/ASRl1DWVWco2yab2kr/giphy.gif",
    link: "https://portfolio-reprograma-nathycabral.netlify.app/",
  },
  {
    id: 2,
    nome: "HTML",
    descricao:
      "Uma aplicação em HTML para treinar os fundamentos e semântica.",
    imagem: "https://media.giphy.com/media/Qn7UUFxtx35SNh5k1h/giphy.gif",
    link: "https://kriptonuniverse.netlify.app/",
  },
  {
    id: 3,
    nome: "M de maravilhosa",
    descricao:
      'Um projeto para finalização de módulo HTML e CSS.',
    imagem: "https://media.giphy.com/media/ZO4ZnOueIT2OwyXEd6/giphy.gif",
    link: "https://m-de-maravilhosa-nathallia-cabral.netlify.app/",
  },
  {
    id: 4,
    nome: "JavaScript",
    descricao:
      "Vamos procurar Digimons? Busca, cards e consumo de API através de Javascript puro.",
    imagem: "https://media.giphy.com/media/DXodg4sZyf6Qh7Tqma/giphy.gif",
    link: "https://digimonjavascriptv.netlify.app/",
  },
];

function Diario() {
  return (
    <>
      <Header image={image} description="Ilustração">
        Diário da Reprograma
      </Header>

      <div className="cartao-container">
        {list.map((diario => {
            return(
                
          <div className="cartao" key={diario.id}>
            <h1>{diario.nome}</h1>
            <img src={diario.imagem} alt={"gif do projeto " + diario.nome} />
            <p>{diario.descricao}</p>
            <a href={diario.link} className="enter-repo" target="_blank">
              <BsArrowReturnRight siz={16} color="#111" />
            </a>
          </div>
                   )
        }))}

      </div>
    </>
  );
}

export default Diario;
