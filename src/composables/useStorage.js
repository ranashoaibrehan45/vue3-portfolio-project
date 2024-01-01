import { ref, watch } from "vue";

export function useStorage(key, val = null) {
    let storedVal = read();

    if (storedVal) {
        val = ref(storedVal);
    } else {
        val = ref(val);
        write();
    }

    watch (val, write, { deep: true });

    // read from localStorage
    function read() {
        JSON.parse(localStorage.getItem(key));
    }

    // write to localStorage
    function write() {
        if (val.value == null || val.value == '') {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(val.value));
        }
    }
    
    return val;
}