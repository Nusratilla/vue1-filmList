<template>
  <Box class="d-flex justify-content-center">
    <nav aria-label="pagination">
      <ul class="pagination pagination-sm">
        <li v-for="pageNumber in  totalPages " :key="pageNumber" :class="{ active: pageNumber === page }"
          @onPageHandler="$emit('onPageHandler', pageNumber)">
          <span class="page-link">{{ pageNumber }}</span>
        </li>
      </ul>
    </nav>
  </Box>
</template>
<script>
export default {
  props: {
    totalPages: {
      type: Function,
      required: true,
    },
  }
}
</script>
<style></style>