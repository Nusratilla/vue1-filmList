<template >
  <Box>
    <h3>Add New Movie</h3>
    <!-- <form class="add-form d-flex" @submit.prevent>  -->
    <form class="add-form d-flex">
      <input type="text" class="new-movie-label form-control" placeholder="Name" v-bind:value="name"
        v-on:input="name = $event.target.value">
      <input type="number" class="new-movie-label form-control" placeholder="Viewed" :value="viewed"
        @input="viewed = $event.target.value">
      <PrimaryButton class="btn-outline-dark" type="submit" @click="addMovie">Add</PrimaryButton>
    </form>
  </Box>
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
      if (!this.name || !this.viewed) return
      const newMovie = {
        name: this.name,
        viewers: this.viewed,
        favourite: false,
        like: true,
        // if we work with server no need to add ID genereter coz server will add it automatically 
        // id: Date.now() 
      }
      this.$emit("createMovie", newMovie)
      this.name = ''
      this.viewed = ''
    }

  }
}
</script>
<style scoped>
.new-movie-label {
  margin: 0 .5rem;
}
</style>