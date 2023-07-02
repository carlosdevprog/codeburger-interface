import axios from "axios";

const nodeBurger = axios.create({
    baseURL: "https://api-codeburger-production-f5bb.up.railway.app/"
})

nodeBurger.interceptors.request.use( async config => {
    const userData = await localStorage.getItem("codeburger:userData")
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    return config
})

export default nodeBurger