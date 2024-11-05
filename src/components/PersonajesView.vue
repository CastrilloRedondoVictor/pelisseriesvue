<template>
    <div class="container mt-5">
      <div v-if="personajes.length > 0" class="row justify-content-center">
        <div v-for="personaje in personajes" :key="personaje.idPersonaje" class="col-md-4 mb-4">
          <div class="card text-center shadow-sm h-100">
            <img :src="personaje.imagen" :alt="personaje.nombre" class="card-img-top" style="height: 250px; object-fit: cover;">
            <div class="card-body">
              <h5 class="card-title">{{ personaje.nombre }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PelisService from '@/services/PelisService'
  var pelisService = new PelisService()
  
  export default {
    name: 'PersonajesView',
    data() {
      return {
        personajes: []
      }
    },
    methods: {
      getPersonajesSerie() {
        pelisService.getPersonajesSerie(this.$route.params.id).then(response => {
          this.personajes = response
        })
      }
    },
    mounted() {
      this.getPersonajesSerie()
    }
  }
  </script>
  
  <style scoped>
  .card {
    border-radius: 10px;
    transition: transform 0.3s ease;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card-title {
    font-size: 1.2rem;
    color: #333;
    font-weight: 600;
  }
  </style>
  