import { formateSnakeCaseKeysForCamelCase } from '@badass-team-code/formatted-cases-words'
import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(url: string) {
    const [data, setData] = useState<T | []>([])
    const list = async () => {
        try {
            const response = await axios.get(url)
            const data = formateSnakeCaseKeysForCamelCase(response.data)

            const formattedData = {
                code: data.pixCopiaECola,
                url: data.url
            }

            console.log(formattedData)
            setData(response?.data)
        } catch (error) {
            setData([])
        }
    }

    useEffect(() => {
        list()
    }, [])

    return { data }
}
