import axios from 'axios'

const url = "https://localhost/3000/students"

export const getInfo = async () => {
    try{
        const res = await axios.get(url)
    } catch(e){
        console.log(e)
    }
}