<script setup>
import { ref } from 'vue';
import 'animate.css';

defineProps({
    val: TypeError
})

const index = ref(1);
const length = ref(6);
const toggleIndex = () => {
    if (index.value == length.value){
        index.value = 1
    } else {
        index.value ++
    }
};
const listAnimate = [
    "animate__animated animate__zoomIne",
    "animate__animated animate__rollIn",
    "animate__animated animate__backInUp",
    "animate__animated animate__jello",
    "animate__animated animate__flip",
    "animate__animated animate__lightSpeedInRight",
    "animate__animated animate__lightSpeedInRight",
    "animate__animated animate__lightSpeedInRight",

]
const reached = ref();



</script>

<template>
    <div>
        <h2> Index: {{index}} and reached: {{reached}}</h2>
        <button @click="toggleIndex" >1</button>
        <button id="1">2</button>
        <button name="2" v-if="index == 3">3</button>
        <div v-for="b in length">
            <button @click="toggleIndex" v-show="index == b" :class="'koke'+b"> Good{{b}} </button>
            <button @click="toggleIndex" v-show="index == b" :class="listAnimate[b] " :style="'padding:'+ b*10 +'px;'"> Good{{b}} </button>
            <div class="rainbow">
            </div>
        </div>
    </div>
    
</template>

<style>
.koke1{
background: red;
    
}
.koke2{
    background-color: cadetblue;
}

.rainbow {
    border-width: 10px;
    border-style: solid;
    -webkit-animation: changeColor 10s; 
    animation: changeColor 10s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
}

@-webkit-keyframes changeColor {
    0%   {border-color: red;}
    33%  {border-color: yellow;}
    66%  {border-color: blue;}
    100% {border-color: green;}
}

/* Standard syntax */
@keyframes changeColor {
    0%   {border-color: red;}
    33%  {border-color: yellow;}
    66%  {border-color: blue;}
    100% {border-color: green;}
}
</style>