<script setup>
import TabableTextarea from '@/components/TabableTextarea.vue'
import { provide, ref } from 'vue';

let name = ref('Shoaib');
provide('username', {
    name,
    changename: () => name.value = 'feroz'
});

let comment = ref('');

setTimeout(() => {
    name.value = 'Zohaib';
}, 2000);

/*
onMounted(() => {
    textarea.value.addEventListener("keydown", (e) => {
        let t = textarea.value;
        // if the tab key was pressed
        if (e.keyCode == 9) {
            let val = t.value,
            start = t.selectionStart,
            end = t.selectionEnd;

            t.value = val.substring(0, start) + "\t" + val.substring(end);

            t.selectionStart = t.selectionEnd = start + 1;

            e.preventDefault();
        }
    })
})
*/
</script>
<template>
    <main>
        <form action="">
            <TabableTextarea v-model="comment" style="width: 100%; height: 300px;"></TabableTextarea>
        </form>
    </main>
</template>