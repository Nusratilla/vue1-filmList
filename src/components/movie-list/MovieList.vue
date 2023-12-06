<template>
  <Box>
    <ul class="list-group">
      <MovieListItem v-for="movie in movies" v-bind:movie="movie" :key="movie.id" @onLike="$emit('onLike', movie.id)"
        @onFavourite="$emit('onFavourite', movie.id)" @onRemove="$emit('onRemove', movie.id)" />
    </ul>
  </Box>
</template>
<script>
import MovieListItem from "../Movie-list-item/MovieListItem.vue"
export default {
  components:
    { MovieListItem },
  props: {
    movies: {
      type: Array,
      required: true,
    }
  }
}
</script>
<style scoped></style>