import axios from "axios";
import URI_MAP from "../URI"

export const unsplash = async (options) =>{
    const res = await axios.get(`${URI_MAP}`)
}
