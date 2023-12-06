<template >
  <div class="btn-group">
    <button class="btn" type="button" @click="filterHandler('all')"
      :class="[filterName == 'all' ? 'btn-dark' : 'btn-outline-dark']">All Movies</button>
    <button class="btn" type="button" @click="filterHandler('liked')"
      :class="[filterName == 'liked' ? 'btn-dark' : 'btn-outline-dark']">Liked Movies</button>
    <button class="btn" type="button" @click="filterHandler('mostViewed')"
      :class="[filterName == 'mostViewed' ? 'btn-dark' : 'btn-outline-dark']">Most Viewed Movies</button>
  </div>
</template>
<script>
export default {
  props: {
    updateFilterHandler: {
      type: Function,
      required: true,
    },
    filterName: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      filter: 'all'
    }
  },
  methods: {
    filterHandler(filter) {
      this.filter = filter
      this.updateFilterHandler(this.filter)
    }
  }
}
</script>
<style ></style>