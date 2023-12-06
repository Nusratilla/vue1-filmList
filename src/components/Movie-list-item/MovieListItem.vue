
<template >
  <li class="list-group-item d-flex justify-content-between"
    :class="[{ like: movie.like }, { favourite: movie.favourite }]">
    <span class="list-group-item-label">{{ movie.name }}</span>
    <input type="number" class="list-group-item-input" v-bind:value="movie.viewers">
    <div class="d-flex justify-content-center align-items-center">

      <button @click="onLike"><i class="bi bi-star-fill"></i></button>

      <button @click="$emit('onFavourite', movie.id)" type="button" class="btn-cookie btn-sm">
        <i class="bi bi-cookie"></i>
      </button>

      <button @click="$emit('onRemove', movie.id)" type="button" class="btn-trash btn-sm">
        <i class="bi bi-trash"></i>
      </button>


    </div>
  </li>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true,
    }
  },
  methods: {
    onLike() {
      this.$emit('onLike', this.movie.id)
    }
  },
}
</script>
<style scoped>
.list-group-item {
  padding: 15px 20px;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #3b457c;
}

.list-group-item:last-child {
  border-bottom: none;
}

.list-group-item span {
  line-height: 35px;
  font-size: 20px;
  width: 550px;
  /* cursor: pointer; */
}

.list-group-item input {
  line-height: 35px;
  font-size: 20px;
  text-align: center;
  border: none;
  background-color: transparent;
  outline: none;
}

.list-group-item button {
  width: 35px;
  height: 35px;
  margin: 3px;
  font-size: 17px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.list-group-item .btn-cookie {
  color: #e09f3e;
}

.list-group-item .btn-trash {
  color: #e5383b;
}

.list-group-item .bi-star-fill {
  width: 35px;
  height: 35px;
  text-align: center;
  line-height: 35px;
  font-size: 18px;
  color: #7e7e7e;
  transition: .3s all;
  /* transform: translateX(30px);
  opacity: 0; */
}

.list-group-item.like .bi-star-fill {
  transform: translateX(0);
  opacity: 1;
  color: hsl(0, 100%, 58%);
}

.list-group-item.favourite .list-group-item-label,
.list-group-item.favourite .list-group-item-input {
  color: #e09f3e;
}
</style>