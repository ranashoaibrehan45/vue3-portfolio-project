import { defineStore } from "pinia";

export let useTeamStore = defineStore('team', {
    state: () => ({
            name: '',
            spots: 0,
            members: [

            ]
    }),

    actions: {
        async fill() {
            let response = await import('@/stores/team.json');
            this.$state = response.default;
                //let data = r.default;

                // this.name = data.name;
                // this.spots = data.spots;
                // this.members = data.members;

                // this.$patch({
                //     name: data.name,
                //     spots: data.spots,
                //     members: data.members,
                // })
            
        },

        grow(spots) {
            this.spots = spots;
        },

        addMember(name, email, status) {
            console.log(name);
        }
    },

    getters: {
        spotsRemaining() {
            return this.spots - this.members.length;
        }
    }
})