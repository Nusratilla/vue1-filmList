<template>
  <Box>
    <p class="fs3 text-uppercase">All Movies: {{ allMouviesCount }}</p>
    <p class="fs4 text-uppercase">Favourite Movies: {{ favouriteMoviesCount }}</p>
    <p class="fs4 text-uppercase">Liked Movies: {{ likeMoviesCount }}</p>
  </Box>
</template>

<script>
export default {
  props: {
    allMouviesCount: {
      type: Number,
      required: true,
    },
    favouriteMoviesCount: {
      type: Number,
      required: true,
    },
    likeMoviesCount: {
      type: Number,
      required: true,
    }
  },
}
</script>

<style scoped>
.app-info {
  padding: 1.5rem;
  background-color: #fff2d0;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, .15);
}
</style>