<template>
    <div class="container mt-5 d-flex justify-content-center">
      <div v-if="serie" class="card text-center shadow-lg p-3" style="width: 24rem;">
        <img class="card-img-top mb-3" :src="serie.imagen" :alt="serie.nombre" style="width: 100%; border-radius: 15px;">
        <div class="card-body">
          <h2 class="card-title text-primary">{{ serie.nombre }}</h2>
          <p class="card-text">
            <strong>Puntuación:</strong> {{ serie.puntuacion }}
          </p>
          <p class="card-text">
            <strong>Año de lanzamiento:</strong> {{ serie.anyo }}
          </p>
          <router-link :to="`/personajesserie/${serie.idSerie}`" class="btn btn-outline-primary mt-3">
            Ver Personajes
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PelisService from '@/services/PelisService'
  var pelisService = new PelisService()
  
  export default {
    name: 'SeriesGet',
    data() {
      return {
        serie: null
      }
    },
    methods: {
      getSerie() {
        pelisService.getSerie(this.$route.params.id).then(response => {
          this.serie = response
        })
      }
    },
    mounted() {
      this.getSerie()
    },
    watch: {
    '$route.params.id': function () {
      this.getSerie()
    }
  }
  }
  </script>
  
  <style scoped>
  .card {
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }
  .card:hover {
    transform: scale(1.03);
  }
  .card-title {
    font-weight: 700;
    font-size: 1.5rem;
  }
  </style>
  