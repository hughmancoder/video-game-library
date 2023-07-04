import axios from "axios";

export default axios.create({ 
    baseURL: "https://api.rawg.io/api/games",
    params: {
        key: '12bebd15b3c54ab6a8bd090e26980436'
    }
})