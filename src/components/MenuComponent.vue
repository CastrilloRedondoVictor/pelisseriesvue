<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-3">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <img style="width: 100px;" src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png" alt="logo">
        </router-link>
        
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" exact to="/">
                Home
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" active-class="active" exact to="/personajespost">
                Añadir personaje
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" active-class="active" exact to="/personajesupdate">
                Modificar personaje
              </router-link>
            </li>
  
            <!-- Opción Desplegable -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Series
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="serie in series" :key="serie.idSerie">
                  <router-link class="dropdown-item" :to="`/seriesget/${serie.idSerie}`">{{ serie.nombre }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import PelisService from '@/services/PelisService'
  var pelisService = new PelisService()

  export default {
    name: 'MenuComponent',
    data() {
        return {
            series: []
        }
    },
    methods: {
        getSeries() {
            pelisService.getSeries().then(response => {
                this.series = response
            })
        }
    },
    mounted() {
        this.getSeries()
    },
    
  }
  </script>
  