<template >
  <div class="movie-add-form">
    <h3>Add New Movie</h3>
    <!-- <form class="add-form d-flex" @submit.prevent>  -->
    <form class="add-form d-flex">
      <input type="text" class="new-movie-label form-control" placeholder="Name" v-bind:value="name"
        v-on:input="name = $event.target.value">
      <input type="number" class="new-movie-label form-control" placeholder="Viewed" :value="viewed"
        @input="viewed = $event.target.value">
      <button class="btn btn-outline-dark" type="submit" @click="addMovie">Add</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      viewed: "",
    }
  },
  methods: {
    addMovie(e) {
      e.preventDefault()
      const newMovie = {
        name: this.name,
        viewers: this.viewed,
        favourite: false,
        like: true,
        id: Date.now()
      }
      this.$emit("createMovie", newMovie)
      this.name = ''
      this.viewed = ''
    }

  }
}
</script>
<style scoped>
.movie-add-form {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fff2d0;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, .15);
}
</style>