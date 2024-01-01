<script setup>
import {useFlash} from '@/composables/useFlash';
import { useTeamStore } from '@/stores/TeamStore';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

let { flash } = useFlash();
let team = useTeamStore();
let showModal = ref(false);

let name = ref('');
let email = ref('');
let status = ref('Active');

function addMember() {
    team.members.push({
        name: name.value,
        email: email.value,
        status: status.value
    });

    name.value = '';
    email.value = '';
    status.value = 'Active';

    flash('Success', 'Member created successfully', 'success');
}
</script>

<template>
    <button 
        class="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 disabled:bg-gray-400"
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
                    <div class="grid justify-between gap-2">
                        <input type="text" v-model="name" placeholder="Enter name..." class="p-2 mt-3 border w-96" />
                        <input type="email" v-model="email" placeholder="Email address..." class="p-2 mt-3 border" />
                        <input type="text" v-model="status" placeholder="Status..." class="p-2 mt-3 border" />

                        <div class="flex gap-5 mt-4">
                            <div class="flex gap-2">
                                <input type="radio" id="one" value="Active" v-model="status" />
                                <label for="one">Active</label>
                            </div>
                            <div class="flex gap-2">
                                <input type="radio" id="two" value="Blocked" v-model="status" />
                                <label for="two">Blocked</label>
                            </div>
                        </div>

                        <button @click.prevent="addMember" class="p-2 mt-4 bg-green-400 border rounded hover:bg-green-500 rounded-xl">Add</button>
                    </div>
                </form>
            </template>
        </Modal>
    </Teleport>
</template>