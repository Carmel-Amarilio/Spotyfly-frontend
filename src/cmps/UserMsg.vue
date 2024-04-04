<template>
    <section v-if="msg.txt" class="user-msg">
        <p>{{ msg.txt }}</p>
    </section>
</template> 

<script>
import { eventBus } from '@/services/eventBus.service'

export default {
    data() {
        return {
            msg: { txt: '', }
        }
    },
    methods: {
        setMsg(msg) {
            this.msg.txt = msg.txt
            setTimeout(() => this.msg.txt = '', 2000)
        }
    },
    created() {
        eventBus.on('user-msg', this.setMsg)
    }
}
</script>

<style lang="scss">
// @import "@/assets/styles/setup/variables.scss";
@import url("../assets/styles/setup/_variables.scss");

.user-msg {
    position: fixed;
    bottom: calc(7vh + 20px);
    right: 20px;
    padding: 10px;
    min-width: 200px;
    background-color: rgb(125, 165, 250);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    z-index: 10;
}
</style>