
import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from '../../components/Header/Header'
import image from '../../assets/super.svg'
import axios from 'axios'

import './portfolio.css'

const list = [
  {
    id: 1,
    nome: 'HTML',
    descricao: 'Uma aplicação em HTML para treinar os fundamentos e semântica.',
    conteudo: 'Feito com html.',
    imagem: 'https://media.giphy.com/media/WzYCCB37Cbl5NdIXrx/giphy.gif',
    link: 'https://project-krypton.netlify.app/'
  },
  {
    id: 2,
    nome: 'M de maravilhosa',
    descricao: 'Um projeto para finalização de módulo HTML e CSS.',
    conteudo: 'React hooks e testar os componente com testing library.',
    imagem: 'https://media.giphy.com/media/ZO4ZnOueIT2OwyXEd6/giphy.gif',
    link: 'https://m-de-maravilhosa-nathallia-cabral.netlify.app/'
  },
  {
    id: 3,
    nome: 'JavaScript',
    descricao: 'Vamos procurar Digimons? Busca, cards e consumo de API através de Javascript puro.',
    conteudo: 'React: fundamentos, components, hooks, eventos e consumos de API.',
    imagem: 'https://media.giphy.com/media/DXodg4sZyf6Qh7Tqma/giphy.gif',
    link: 'https://digimonjavascriptv.netlify.app/'
  },
  {
    id: 4,
    nome: 'Meu Portfolio',
    descricao: 'Um site em react para demonstrar meu portfolio',
    conteudo: 'React: fundamentos, components, rotas, hooks, eventos e consumos de API.',
    imagem: 'https://media.giphy.com/media/ASRl1DWVWco2yab2kr/giphy.gif',
    link: 'https://portfolio-reprograma-nathycabral.netlify.app/'
  }
]

function Portfolio() {
  const [repos, setRepos] = useState([])
  const baseURL = 'https://api.github.com/users/nathycabral/repos'

  useEffect(()=> {
    axios
      .get(baseURL)
      .then((response) => setRepos(response.data))
  }, [])

  return(
   <>
    <Header 
      image={image} 
      description="ilustracao Hacker"
    >
      Meus Projetos
    </Header>

    <div className="cartao-container">
      {
        list.map(projeto => {
          return(
            <div className="cartao" key={projeto.id}>
              <h1>{projeto.nome}</h1>
              <img src={projeto.imagem} alt={"gif do projeto "+ projeto.nome}/>
              <p>{projeto.descricao}</p>
              <a href={projeto.link} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#111"/>
              </a>
            </div>
          )
        })
      }
    </div>


    <h2 className="titulo">Outros Projetos no meu Github</h2>  


    <div className="card-container">
      {
        repos.map(repo => {
          return(
            <div className="card" key={repo.id}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={repo.html_url} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#fff"/>
              </a>
            </div>
          )
        })
      }
    </div>
   </>
  )
 }
 
 export default Portfolio