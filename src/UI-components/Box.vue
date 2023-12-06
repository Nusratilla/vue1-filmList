<template>
  <div class="box">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Box'
}
</script>
<style scoped>
.box {
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #d0ffcc;
  border-radius: 4px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, .25);
}
</style>