<script setup lang="ts">
import { ref } from "vue";

const price = ref(50000)
setInterval(()=>{
  price.value++
}, 1000)
</script>

<template>
  <Ticker :price="price"></Ticker>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>
