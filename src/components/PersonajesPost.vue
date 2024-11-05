<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Nuevo Personaje</h1>
        
        <form v-if="series.length > 0" @submit.prevent="postPersonaje" class="col-md-6 mx-auto">
            <div class="form-group">
                <label for="nombre">Nombre del Personaje</label>
                <input 
                    v-model="nombre" 
                    type="text" 
                    class="form-control" 
                    id="nombre" 
                    placeholder="Introduzca el NOMBRE del personaje"
                    required
                >
            </div>
            <div class="form-group">
                <label for="imagen">Imagen del Personaje</label>
                <input 
                    v-model="imagen" 
                    type="text" 
                    class="form-control" 
                    id="imagen" 
                    placeholder="Introduzca el link de la IMAGEN del personaje"
                    required
                >
            </div>
            <div class="form-group">
                <label for="idSerie">Serie del Personaje</label>
                <select 
                    v-model="idSerie"
                    class="form-control text-center" 
                    id="idSerie"
                    required
                >
                    <option value=0>-- SELECCIONE SERIE --</option>
                    <option v-for="serie in series" :key="serie.idSerie" :value="serie.idSerie">{{ serie.nombre }}</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-3">Añadir Personaje</button>
        </form>
    </div>
</template>
<script>
import PelisService from '@/services/PelisService'

var pelisService = new PelisService();
    export default {
        name: 'CochesPost',
        data() {
            return {
                idPersonaje: 0,
                nombre: '',
                imagen: '',
                idSerie: 0,
                series: []
            }
        },
        methods: {
            postPersonaje() {
                let data = {
                    idPersonaje: parseInt(this.idPersonaje),
                    nombre: this.nombre,
                    imagen: this.imagen,
                    idSerie: parseInt(this.idSerie),
                }
                pelisService.postPersonaje(data).then( response => {
                    console.log(response)
                    this.$router.push(`/personajesserie/${this.idSerie}`);
                }
                )
            },
            getSeries() {
                pelisService.getSeries().then(response => {
                    this.series = response
                })
            }
        },
        mounted() {
            this.getSeries()
        }
    }
</script>