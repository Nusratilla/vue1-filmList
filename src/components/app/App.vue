
<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo :allMouviesCount="movies.length" :favouriteMoviesCount="movies.filter(c => c.favourite).length" />
      <div class="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <MovieList :movies="movies" />
      <MovieAddForm />

    </div>

  </div>
</template>

<script>
import AppInfo from "@/components/app-info/AppInfo.vue"
import SearchPanel from "../search-panel/SearchPanel.vue"
import AppFilter from "../app-filter/AppFilter.vue"
import MovieList from '../movie-list/MovieList.vue'
import MovieAddForm from '../movie-add-form/MovieAddForm.vue'
export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm
  },
  data() {
    return {
      movies: [
        {
          name: 'Omar',
          viewers: 875,
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

<style>
.app {
  height: 100vh;
  color: black;
}

.content {
  width: 1000px;
  min-height: 700px;
  background-color: #fff;
  margin: 0 auto;
  padding: 5rem 0;
}

.search-panel {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: #fff2d0;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, .15);
}
</style>
