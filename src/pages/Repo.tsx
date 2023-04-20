import { useParams } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { Repository } from "./Repos";

export function Repo() {
    const params = useParams()
    const currentRepository = params['*'] as string
    const queryClient = useQueryClient()

    async function handleChangeRepositoryDescription() {
        const previousRepos = queryClient.getQueryData<Repository[]>('repos')

        if (previousRepos) {
            const newRepos = previousRepos.map((repo: any) => {
                if (repo.full_name === currentRepository) {
                    return { ...repo, description: 'kauanaaa' }

                } else {
                    return repo
                }
            })
            queryClient.setQueryData('repos', newRepos)
        }
    }

    return (
        <div>
            <h1>{currentRepository}</h1>
            <button onClick={handleChangeRepositoryDescription}>Alterar descrição</button>
        </div>
    )
}