
<template >
  <li class="list-group-item d-flex justify-content-between"> <span class="list-group-item-label">Omar</span>
    <input type="number" class="list-group-item-input" defaultValue="741">
    <div class="d-flex justify-content-center align-items-center">
      <button type="button" class="btn-cookie btn-sm">
        <i class="bi bi-cookie"></i>
      </button>

      <button type="button" class="btn-trash btn-sm">
        <i class="bi bi-trash"></i>
      </button>

      <i class="bi bi-star-fill"></i>
    </div>
  </li>
</template>
<script>
export default {

}
</script>
<style scoped>
.list-group-item {
  padding: 15px 20px;
  border-bottom: 1px solid #516bff;
}

.list-group-item:last-child {
  border-bottom: none;
}
</style>