<script setup>
import { ref } from 'vue'
import 'animate.css'
import Layer from './Layer.vue';
const name = ref('')

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
   
<div class="cake">
    <div  class="animate__animated animate__backInDown layer1">CAndle waow $$$$@^%@#!!!</div>
    <div class="animate__animated animate__backInDown layer2"></div>
    <div class="animate__animated animate__backInDown layer3"></div>
    <div v-for="i in 4">
        <Layer :scale="i" :class="'animate__animated animate__backInDown animate__delay-' + i + 's'"></Layer>

    </div>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.layer1 {
    height: 300px;
    width: 600px;
    background-color: aquamarine;
} 
.layer1:hover {
    background-color: blue;
    }

.layer2 {
    display: flex;
    justify-content: center;
    width:200px;
    height: 40px;
    background-color: blueviolet;
}
.layer3{
    display: flex;
  
    width:200px;
    height: 400px;
    background-color: burlywood;

}
.cake{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;

}

Layer {
    animation-duration: 5s;
}
</style>
