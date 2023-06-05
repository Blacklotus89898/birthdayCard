<script setup>
import { ref } from 'vue';
import Dialogue from './Dialogue.vue'
const props = defineProps({
  scale: Number
})

const num = ref(props.scale);
const ms = 'width:'+ num.value*100+  'px; height:' + num.value*70+'px;' + 'background-color: red'
console.log(ms)


const showD = ref(false);

</script>

<template>
    <div :style="ms" @click="showD = !showD">
        <h1 >Layer {{ props.scale }} </h1>
        <Dialogue v-if="showD" :scale="scale"></Dialogue>
    </div>

</template>

<style>
 h1 {
background-color: aqua;
margin: 0%;
padding: 10px;


}
</style>