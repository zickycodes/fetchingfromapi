import axios from "axios";

const getData = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID QmlqC30NLUKrPcpfO2X2ta1dx1DNF2NBSdYTE21msz8",
      }
})


export default getData