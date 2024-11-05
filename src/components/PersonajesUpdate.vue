<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Modificar Personaje</h1>
        
        <form v-if="series.length > 0 && personajes.length > 0" @submit.prevent="putPersonaje" class="row">
            <div class="form-group col-6">
                <label for="idSerie">Serie</label>
                <select 
                    @change="getSerie"
                    v-model="idSerie"
                    class="form-control text-center" 
                    id="idSerie"
                    required
                >
                    <option value=0>-- SELECCIONE SERIE --</option>
                    <option v-for="serie in series" :key="serie.idSerie" :value="serie.idSerie">{{ serie.nombre }}</option>
                </select>
            </div>
            <div class="form-group col-6">
                <label for="idPersonaje">Personaje</label>
                <select 
                    @change="getPersonaje"
                    v-model="idPersonaje"
                    class="form-control text-center" 
                    id="idPersonaje"
                    required
                >
                    <option value=0>-- SELECCIONE PERSONAJE --</option>
                    <option v-for="personaje in personajes" :key="personaje.idPersonaje" :value="personaje.idPersonaje">{{ personaje.nombre }}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-3">Modificar Personaje</button>
        </form>
        <div class="row">
            <div class="col-6" v-if="serie"><h3>{{ serie.nombre }}</h3><img style="width: 100%;" :src="serie.imagen" :alt="serie.nombre"></div>
            <div class="col-6" v-if="personaje"><h3>{{ personaje.nombre }}</h3><img style="width: 100%;" :src="personaje.imagen" :alt="personaje.nombre"></div>
        </div>
    </div>
</template>

<script>
import PelisService from '@/services/PelisService'

var pelisService = new PelisService();

    export default {
        name: 'PersonajesUpdate',
        data() {
            return {
                idSerie: 0,
                idPersonaje: 0,
                series: [],
                personajes: [],
                serie: null,
                personaje: null
            }
        },
        methods: {
            getPersonajes() {
                pelisService.getPersonajes().then(response => {
                    this.personajes = response
                })
            },
            getSeries() {
                pelisService.getSeries().then(response => {
                    this.series = response
                })
            },
            getPersonaje() {
                pelisService.getPersonaje(this.idPersonaje).then(response => {
                    this.personaje = response
                })
            },
            getSerie() {
                pelisService.getSerie(this.idSerie).then(response => {
                    this.serie = response
                })
            },
            putPersonaje() {
                pelisService.putPersonaje(this.idPersonaje, this.idSerie).then(response => {
                    console.log(response)
                    this.$router.push(`/personajesserie/${this.idSerie}`);
                })
            }
        },
        mounted() {
            this.getPersonajes();
            this.getSeries();
        }
    }
</script>