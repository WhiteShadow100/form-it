import { useEffect, useState } from "react"

function useAPI(info){

    const [data, setdata] = useState(null)

    useEffect(() => {
        fetch(info.url,{mode: "cors"})
        .then(res => res.json())
        .then((result) => 
        {
            info.callback(result)
        },
        (error) => {
            info.callback(error)
        })
    }, [])
    
}

export default useAPI;