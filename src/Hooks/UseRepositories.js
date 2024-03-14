import {useEffect, useState} from 'react'
  
const useRepositories = () => {

  const [repositories, setRepositories] = useState(null)
  
  const fetchRepositories = async () => {
    const response = await globalThis.fetch('https://c29f-193-43-98-82.ngrok-free.app/api/repositories' || 'http://localhost:5001/api/repositories')
    const json = await response.json()
    setRepositories(json)
  }

  useEffect(()=> {
    fetchRepositories()
  }, [])

  const repositoriesNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : []

    return { repositories: repositoriesNodes }
}

export default useRepositories