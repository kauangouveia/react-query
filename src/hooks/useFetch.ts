import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | []>([])
    const [isLoading, setIsLoading] = useState(true)
    const list = async () => {
        try {
            const response = await axios.get(url)
            const data = formateSnakeCaseKeysForCamelCase(response.data)

            setData(response?.data)
        } catch (error) {
            setData([])
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        list()
    }, [])

    return { data, isLoading }
}
