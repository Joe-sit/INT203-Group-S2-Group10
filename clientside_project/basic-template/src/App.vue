<script setup>
//v-text
const msg="Hello SIT, Vue.js "
const msg2="Hello v-text"
// v-bind
const headingStyle = 'color: red;font-style: italic'
const imagePaths = '../public/images/troll.png'
</script>
 
<template>
 <h1>{{ msg }}</h1>     <!--ตัวเต็ม v-text="msg" -->
 <p>{{ msg2 }}</p><hr>
 <p :style="headingStyle">This text style from v-bind</p> <!--ตัวเต็ม v-bind:style="headingStyle" -->
 <img :src="imagePaths" alt="trollFace">
</template>
 
<style>

</style>