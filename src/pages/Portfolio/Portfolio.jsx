
import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import Header from '../../components/Header/Header'
import image from '../../assets/hacker.svg'
import axios from 'axios'

import './portfolio.css'


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