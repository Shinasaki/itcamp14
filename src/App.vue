<template>
  <div id="app" class="app">
    <router-view name="header"/>
    <router-view name="body" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
