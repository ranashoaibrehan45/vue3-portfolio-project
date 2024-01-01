<script setup>
import {useFlash} from '@/composables/useFlash';

let { flash } = useFlash();
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="flash('Yay!', 'It works on the about page!', 'info')">Click me!</button>
  </div>
</template>
