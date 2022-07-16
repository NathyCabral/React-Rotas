import { BsArrowReturnRight } from "react-icons/bs";
import Header from "../../components/Header/Header";
import image from "../../assets/super.svg";

import "./diario.css";

const list = [
  {
    id: 1,
    nome: "GIT",
    descricao:
      "O que é git? Git é um sistema de controle de versão de arquivos.",
    imagem: "https://media.giphy.com/media/WzYCCB37Cbl5NdIXrx/giphy.gif",
    link: "https://project-krypton.netlify.app/",
  },
  {
    id: 2,
    nome: "HTML",
    descricao:
      "HTML (Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo.",
    imagem: "https://media.giphy.com/media/ZO4ZnOueIT2OwyXEd6/giphy.gif",
    link: "https://m-de-maravilhosa-nathallia-cabral.netlify.app/",
  },
  {
    id: 3,
    nome: "CSS",
    descricao:
      'O Cascading Style Sheets (CSS) é uma "folha de estilo" composta por “camadas” e utilizada para definir a apresentação (aparência) em páginas da internet que adotam para o seu desenvolvimento linguagens de marcação (como XML, HTML e XHTML).',
    imagem: "https://media.giphy.com/media/DXodg4sZyf6Qh7Tqma/giphy.gif",
    link: "https://digimonjavascriptv.netlify.app/",
  },
  {
    id: 4,
    nome: "JavaScript",
    descricao:
      " JavaScript (abreviado como JS) é uma linguagem de programação dinâmica cheia de recursos que quando aplicada em um documento HTML,  pode fornecer interatividade dinâmica em sites. Foi inventada por Brendan Eich, co-fundador do projeto Mozilla, da Fundação Mozilla e da Corporação Mozilla.",
    imagem: "https://media.giphy.com/media/ASRl1DWVWco2yab2kr/giphy.gif",
    link: "https://portfolio-reprograma-nathycabral.netlify.app/",
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
