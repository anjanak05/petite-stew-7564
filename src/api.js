import axios from "axios"

export const getUpcomingData =()=>{
    return axios (`http://localhost:9090/upcoming`)
}

export const getLiveData =()=>{
    return axios (`http://localhost:9090/live`)
}

export const getCompledtedData =()=>{
    return axios (`http://localhost:9090/Completed`)
}

export const getUpcomingFantasyData =()=>{
    return axios (`http://localhost:9090/upcomingFantasy`)
}
export const getliveFantasyData =()=>{
    return axios (`http://localhost:9090/liveFantasy`)
}
export const getCompledtedFantasyData =()=>{
    return axios (`http://localhost:9090/CompletedFantasy`)
}

export const getFantasyPreviewData =()=>{
    return axios (`http://localhost:9090/fantasyPreview`)
}

export const getFantasyVideoData =()=>{
    return axios (`http://localhost:9090/fantasyVideo`)
}

export const getNewsData =()=>{
    return axios (`http://localhost:9090/news`)
}

export const getSingleNewsData =(id)=>{
    return axios (`http://localhost:9090/news/${id}`)
}