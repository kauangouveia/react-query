import { useFetch } from "./hooks/useFetch"

type Repository = {
  full_name: string;
  description: string;
}

function App() {
  const { data, isLoading } = useFetch<Repository[]>("https://api.github.com/users/kauangouveia/repos")

  return (
    <ul>
      {isLoading && <p>Carregando...</p>}
      {data.map((repo) => (
        <li key={repo.full_name}>
          <strong>{repo.full_name}</strong>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default App
