<script setup>
import { ref } from 'vue'

const name = ref('')
const mainColor = ref('')
const secColor = ref()

const injectCSS = css => {
  let el = document.createElement('style');
  el.type = 'text/css';
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};

// injectCSS('body { background-color:'+ mainColor+'}');

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div>
        <form action="">
        <input type="text">    
            <input type="number" name="" id="">
            <input type="date" name="" id="">
            
            <h3></h3>
        
            
        <label for="mc">Main color: </label>  
        <input type="color" name="" id="mc" v-model="mainColor">
        <!-- <button @click="injectCSS('body {root:'+ mainColor+';}')"> Reset</button>  -->
        <div @click="injectCSS('body { background-color:'+ mainColor+';}')">ChangeMain</div>
            
        <label for="mc">Secondary color: </label>  
        <input type="color" name="" id="mc" v-model="secColor">
        <button @click="injectCSS('body {color:'+ secColor+';}')"> Reset</button> 
        <div @click="injectCSS('body {color:'+ secColor+';}')">Change sec</div>
        <!-- <button @click="injectCSS('body { background-color:'+ mainColor+';}')">ssdf</button> -->
        </form>
    </div>
        
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

body {
   
}
</style>
