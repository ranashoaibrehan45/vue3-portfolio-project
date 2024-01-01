<script setup>
import { useTeamStore } from '@/stores/TeamStore';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

let team = useTeamStore();
let showModal = ref(false);

let name = ref('');
let email = ref('');
let status = ref('Active');

function addMember() {
    team.members.push({
        name: name,
        email: email,
        status: status
    });
}
</script>

<template>
    <button 
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="!team.spotsRemaining"
        @click="showModal = true"
    >
    Add member ({{ team.spotsRemaining }} Sports available)
    </button>
    
    <Teleport to="body">
        <Modal :show="showModal" @close="showModal = false">
            <template #header>
                <h1>Add new member</h1>
            </template>

            <template #default>
                <p>Add a member to your team.</p>
                <form action="" class="mt-4">
                    <div class="grid gap-2 justify-between">
                        <input type="text" v-model="name" placeholder="Enter name..." />
                        <input type="email" v-model="email" placeholder="Email address..." />
                        <input type="text" v-model="status" placeholder="Status..." />

                        <button @click.prevent="addMember">Add</button>
                    </div>
                </form>
            </template>
        </Modal>
    </Teleport>
</template>