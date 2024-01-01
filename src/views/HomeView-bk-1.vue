<script setup>
  import {useFlash} from '@/composables/useFlash';
  import {useStorage} from '@/composables/useStorage';

  let { flash } = useFlash(); 

  let food = useStorage('food', 'salad');
  let age = useStorage('age');
  let obj = useStorage('users', {'name': 'shoaib'});

  setTimeout(() => {
    obj.value.name = 'Rana shoaib';
  }, 2000);
  // let food = ref(localStorage.getItem('food'));
  // let age = ref(localStorage.getItem('age'));

  // watch (food, (val) => {
  //   write('food', val);
  // });

  // watch (age, (val) => {
  //   write('age', val);
  // })

  // function write(key, value) {
  //   localStorage.setItem(key, value)
  // }

  // setTimeout(() => {
  //   food.value = 'fish';
  // }, 2000);
</script>

<template>
  <main>
    <h3>Test Flash with composables</h3>
    <button @click="flash('Test', 'It works!')">Click me!</button>

    <p>
      What is you favorite food? 
      <input type="text" v-model="food">
    </p>

    <p>
      How old are you? 
      <input type="text" v-model="age">
    </p>
  </main>
</template>
