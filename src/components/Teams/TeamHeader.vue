<script setup>
import { useTeamStore } from '@/stores/TeamStore';
import TeamMemberCreate from './TeamMemberCreate.vue';

let team = useTeamStore();
</script>
<template>
    <header class="flex justify-between">
        <div>
            <TeamMemberCreate  />
        </div>

        <div>
            <h3 class="inline-flex items-center text-3xl relative">
                <img src="../../smiley.png" alt="" class="mr-2">
                {{ team.name }} Team
                <div class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center iterms-center absolute -right-4 -top-2">
                    {{ team.members.length }}
                </div>
            </h3>
        </div>
    </header>
</template>