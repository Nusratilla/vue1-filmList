
<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo :allMouviesCount="movies.length" :favouriteMoviesCount="movies.filter(c => c.favourite).length" />
      <Box class="search-panel">
        <SearchPanel :updateTermHandler="updateTermHandler" />
        <AppFilter :updateFilterHandler="updateFilterHandler" :filterName="filter" />
      </Box>
      <Box v-if="!movies.length && !isLoading">
        <p class="text-center fs-4 text-danger">List of Movies is Empty!</p>
      </Box>
      <Box v-else-if="isLoading">
        <p class="text-center fs-3">Loading...</p>
      </Box>
      <MovieList v-else :movies="onFilterHandler(onSearchHandler(movies, term), filter)" @onLike="onLikeHandler"
        @onFavourite="onFavouriteHandler" @onRemove="onRemoveHandler" />
      <MovieAddForm @createMovie="createMovie" />
      <TrainTo />
    </div>
  </div>
</template>

<script>
import AppInfo from "@/components/app-info/AppInfo.vue"
import SearchPanel from "../search-panel/SearchPanel.vue"
import AppFilter from "../app-filter/AppFilter.vue"
import MovieList from '../movie-list/MovieList.vue'
import MovieAddForm from '../movie-add-form/MovieAddForm.vue'
import TrainTo from '../Train-to/trainTo.vue'
import axios from 'axios'
export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm,
    TrainTo,
  },
  data() {
    return {
      movies: [],
      term: "",
      filter: 'all',
      isLoading: false,
    }
  },
  methods: {
    createMovie(item) {
      this.movies.push(item)
    },
    onLikeHandler(id) {
      this.movies = this.movies.map(item => {
        if (item.id == id) {
          item.like = !item.like
        }
        return item
      })
    },
    onFavouriteHandler(id) {
      this.movies = this.movies.map(item => {
        if (item.id == id) {
          item.favourite = !item.favourite
        }
        return item
      })
    },
    onRemoveHandler(id) {
      this.movies = this.movies.filter(c => c.id !== id)
    },
    onSearchHandler(arr, term) {
      if (term.length == 0) {
        return arr
      }
      return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
    },
    onFilterHandler(arr, filter) {
      switch (filter) {
        case 'liked':
          return arr.filter(c => c.like)
        case 'mostViewed':
          return arr.filter(c => c.viewers > 500)
        default:
          return arr
      }
    },
    updateTermHandler(term) {
      this.term = term
    },
    updateFilterHandler(filter) {
      this.filter = filter
    },
    async fetchMovie() {
      try {
        this.isLoading = true
        setTimeout(async () => {
          // will take whole info 
          // const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          // console.log(response);
          // will take only data 
          const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
          const newArr = data.map(item => ({
            id: item.id,
            name: item.title,
            viewers: item.id * 114,
            favourite: false,
            like: false,
          }))
          this.movies = newArr
          this.isLoading = false
        }, 3000)

      } catch (error) {
        alert(error.message);
      }
      // finally {
      //   this.isLoading = false
      // }
    },
  },
  mounted() {
    this.fetchMovie()
  },
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
