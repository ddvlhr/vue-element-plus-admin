
import config from './store/config';
<script setup>
import config from '@/store/config'

const theme = config.theme
</script>

<template>
  <div :class="[theme]">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
