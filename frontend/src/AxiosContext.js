import React from 'react'
import axios from 'axios'

const AxiosContext = React.createContext()

export const AxiosProvider = ({children}) =>{
    const get = url => axios.get(url).then(v => v.data)

    return <AxiosContext.Provider value={{get}}>
    {children}
    </AxiosContext.Provider>
}

export default AxiosContext