<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Card from './components/Card.vue'

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <router-link to="/home"  style="color:red;">LOL</router-link> | -->
  <router-link to="/homie"  style="color:red;">LOL</router-link> |
  <router-link to="/gg"  style="color:red;">Game</router-link> |
  <router-link to="/card"  style="color:red;">Card</router-link> |
  <router-link to="/selector"  style="color:red;">Settings</router-link>
  <RouterView></RouterView>


  

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
