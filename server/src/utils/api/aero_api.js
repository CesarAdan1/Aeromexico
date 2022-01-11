import axios from 'axios'

export const getInfo = async () => {
    try{
        const url = `http://localhost:3000/characters`;
        const res = await axios.get(url)
        
        console.log(res)
       // return res
    } catch(error){
        console.log(error)
    }
}

