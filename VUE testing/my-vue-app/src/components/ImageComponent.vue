<template>
  <div v-if="isVisible">
    <img :src="require('../assets/perro.jpg')" alt="perro">
  </div>
</template>

<script>
export default {
  props: ['isVisible']
}
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>