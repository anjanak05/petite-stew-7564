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