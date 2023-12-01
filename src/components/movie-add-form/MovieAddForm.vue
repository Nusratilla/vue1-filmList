<template >
  <div class="movie-add-form">
    <h3>Add New Movie</h3>
    <form class="add-form d-flex">
      <input type="text" class="new-movie-label form-control" placeholder="Enter The Name">
      <input type="text" class="new-movie-label form-control" placeholder="Watched Quantity">
      <button class="btn btn-outline-dark" type="submit">Add</button>
    </form>
  </div>
</template>
<script>
export default {

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