import Global from "@/Global";
import axios from "axios";

export default class PelisService {
    getSeries() {
        return new Promise(function(resolve) {
            let request = 'api/Series'
            axios.get(Global.apiSeries + request).then(response => {
                resolve(response.data)
            })
        })
    }

    getPersonajes() {
        return new Promise(function(resolve) {
            let request = 'api/Personajes'
            axios.get(Global.apiSeries + request).then(response => {
                resolve(response.data)
            })
        })
    }

    getSerie(id) {
        return new Promise(function(resolve) {
            let request = `api/Series/${id}`
            axios.get(Global.apiSeries + request).then(response => {
                resolve(response.data)
            })
        })
    }

    getPersonaje(id) {
        return new Promise(function(resolve) {
            let request = `api/Personajes/${id}`
            axios.get(Global.apiSeries + request).then(response => {
                resolve(response.data)
            })
        })
    }

    getPersonajesSerie(id) {
        return new Promise(function(resolve) {
            let request = `api/Series/PersonajesSerie/${id}`
            axios.get(Global.apiSeries + request).then(response => {
                resolve(response.data)
            })
        })
    }

    postPersonaje(data) {
        return new Promise(function(resolve) {
            let request = `api/Personajes`
            axios.post(Global.apiSeries + request, data).then(response => {
                resolve(response)
            })
        })
    }

    putPersonaje(idPersonaje, idSerie) {
        return new Promise(function(resolve) {
            let request = `api/Personajes/${idPersonaje}/${idSerie}`
            axios.put(Global.apiSeries + request).then(response => {
                resolve(response)
            })
        })
    }
}