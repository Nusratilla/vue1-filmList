
<template>
  <div class="app font-monospace">
    <div class="content">
      <AppInfo :allMouviesCount="movies.length" :favouriteMoviesCount="movies.filter(c => c.favourite).length"
        :likeMoviesCount="movies.filter(c => c.like).length" />
      <Box class="search-panel">
        <SearchPanel :updateTermHandler="updateTermHandler" />
        <AppFilter :updateFilterHandler="updateFilterHandler" :filterName="filter" />
      </Box>
      <Box v-if="!movies.length && !isLoading">
        <p class="text-center fs-4 text-danger">List of Movies is Empty!</p>
      </Box>
      <Box v-else-if="isLoading" class="d-flex justify-content-center">
        <Loader />
      </Box>
      <MovieList v-else :movies="onFilterHandler(onSearchHandler(movies, term), filter)" @onLike="onLikeHandler"
        @onFavourite="onFavouriteHandler" @onRemove="onRemoveHandler" />

      <!-- <Pagination :onPageHandler="changePageHandler" /> -->
      <Box class="pagination-box d-flex justify-content-center">
        <nav aria-label="pagination">
          <ul class="pagination pagination-sm ">
            <li class="page-item" v-for=" pageNumber in totalPages " :key="pageNumber"
              :class="{ active: pageNumber === page }" @click="changePageHandler(pageNumber)">
              <span class="page-link border-dark-subtle">{{ pageNumber }}</span>
            </li>
          </ul>
        </nav>
      </Box>

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
// import Pagination from '../pagination/Pagination.vue'
export default {
  components: {
    AppInfo,
    SearchPanel,
    AppFilter,
    MovieList,
    MovieAddForm,
    TrainTo,
    // Pagination,
  },
  data() {
    return {
      movies: [],
      term: "",
      filter: 'all',
      isLoading: false,
      limit: 10,
      page: 1,
      totalPages: 0,
    }
  },
  methods: {
    // createMovie(item) {
    //   this.movies.push(item)
    // },
    async createMovie(item) {
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', item)
        this.movies.push(response.data)
      } catch (error) {
        alert(error.message)
      }

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
    // onRemoveHandler(id) {
    //   this.movies = this.movies.filter(c => c.id !== id)
    // },
    async onRemoveHandler(id) {
      try {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(response);
        this.movies = this.movies.filter(c => c.id !== id)
      } catch (error) {
        alert(error.message)
      }
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
        // setTimeout(async () => {

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page,
          }
        })
        const newArr = response.data.map(item => ({
          id: item.id,
          name: item.title,
          viewers: item.id * 10,
          favourite: false,
          like: false,
        }))
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.movies = newArr

        // this.isLoading = false
        // }, 3000)

      } catch (error) {
        alert(error.message);
      }
      finally {
        this.isLoading = false
      }
    },
    changePageHandler(page) {
      this.page = page
    },
  },
  mounted() {
    this.fetchMovie()
  },
  watch: {
    page() {
      this.fetchMovie()
    }
  }
}
</script>

<style>
.app {
  height: 100vh;
  color: rgb(0, 0, 0);
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

.pagination {
  cursor: pointer;
}

.page-link {
  color: #000000;
}

.page-link:hover {
  background-color: rgb(0, 0, 0);
  color: #fff;
}

.active>.page-link {
  background-color: rgb(0, 0, 0);
  color: #fff;
}
</style>
