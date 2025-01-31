import axios from "axios";

let api: any

api = axios.create({
    baseURL: "https://data.fixer.io/api/latest"
})