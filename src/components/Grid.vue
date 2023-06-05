<script setup>
import { ref } from 'vue'
import TrollButton from './TrollButton.vue';
const name = ref('')

defineProps({
  msg: String,
})

const count = ref(0);
const board = ref(5);
const myColor = ref();
const n = ref();
const showN = ref(false);
</script>

<template>
    <form action="">
        <input type="number" min="1" v-model="board">
        <input type="color" name="" id="" v-model="myColor">
        <button :style="'background-color:'+ myColor + ';'">Chill</button>
    </form> 

    <div>
        <div class="board" v-for="i in board" :style="'background-color:'+myColor">
            <div class="row" v-for="j in board">
                <div class="s" :style="'transition-duration:' + board/8 + 's;'">i</div>

            </div>
        </div>
    </div>
    <div class="rainbow">
        <h3 v-if="showN">Player: {{n}}</h3>
           <input v-if="!showN" type="text" name="" v-model="n"  id=""> 
           <button @click="showN = !showN"> {{!showN? 'Submit': 'Edit'}} </button>
    </div>
        
    <TrollButton></TrollButton>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.board {
    display: flex;
    width: 600px;
    
    
  
}
.s{
    width: 50px;
    height: 50px;
    background-color: blue;
    flex: 1;
}
.s:hover{
    background-color: red;
    transition: none;
}

.row{
    display: flex;
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
