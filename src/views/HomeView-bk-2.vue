<script setup>
import TabableTextarea from '@/components/TabableTextarea.vue'
import { ref } from 'vue';

let comment = ref('test value');
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