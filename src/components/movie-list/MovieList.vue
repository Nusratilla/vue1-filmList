<template>
  <ul class="movie-list list-group">
    <MovieListItem v-for="movie in movies" v-bind:movie="movie" />
  </ul>
</template>
<script>
import MovieListItem from "../Movie-list-item/MovieListItem.vue"
export default {
  components:
    { MovieListItem },
  data() {
    return {
      movies: [
        {
          name: 'Omar',
          viewers: 874,
          favourite: false,
          like: true,
        },
        {
          name: 'Amir Temur',
          viewers: 951,
          favourite: true,
          like: false,
        },
        {
          name: 'Babur',
          viewers: 753,
          favourite: true,
          like: true,
        }
      ]
    }
  }

}
</script>
<style scoped>
.movie-list {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fff2d0;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, .15);
}
</style>