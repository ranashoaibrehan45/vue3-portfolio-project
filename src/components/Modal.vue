<script setup>

defineProps({
    show: Boolean,
})
</script>
<template>
    <Transition name="modal"
        enter-from-class="opacity-0 scale-125"
        enter-to-class="opacity-100 scale-100"
        enter-active-class="transition duration-300"
        leave-active-class="transition duration-300"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-125"
    >
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <header>
                    <slot name="header">Default header</slot>
                </header>

                <div>
                    <slot name="default">Default body</slot>
                </div>

                <footer class="modal-footer">
                    <slot name="footer">
                        <button @click="$emit('close')" class="border rounded-2xl p-2 font-bold bg-gray-400 hover:bg-gray-500 text-white">Close</button>
                    </slot>
                </footer>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0, .6);
    display: grid;
    place-items: center;
}
.modal-container {
    background: #FFF;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 12px;
}
.modal-footer{
    border-top: 1px solid #EEE;
    margin-top: 1rem;
    padding-top: .5rem;
    font-size: .8rem;
    text-align: right;
}

/* .modal-enter-active, .modal-leave-active {
    transition: opacity .3s; 
}
.modal-enter-from, .modal-leave-to {
    opacity: 0;
    scale: 125;
}
.modal-enter-to, .modal-leave-from {
    opacity: 1000;
    scale: 100;
} */
</style>