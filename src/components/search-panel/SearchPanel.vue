<template >
  <input type="text" class="form-control search-input" placeholder="Search Movies" :value="term" @input="changeHendler">
</template>
<script>
export default {
  props: {
    updateTermHandler: {
      type: Function,
      required: true,
    }
  },
  data() {
    return {
      term: '',
    }
  },
  methods: {
    changeHendler(e) {
      this.term = e.target.value
      this.updateTermHandler(this.term)
    }
  }
}
</script>
<style scoped>
.search-input {
  margin: 0 0 1rem 0;
  padding: 1.5rem;
  border-radius: .2rem;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, .15);
}
</style>