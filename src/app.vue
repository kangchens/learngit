<template>
    <div class="App">
       <router-view></router-view>
    </div>
</template>

<script>
    import {mapActions,mapGetters} from 'vuex';
    export default {
        data() {
            return {
                message: "我来自拉开圣诞东北"
            }
        },
        mounted () {
        },
        computed: {
            ...mapGetters(['getCounter'])
        },
        methods: {
            ...mapActions(['add'])
        },
    }
</script>

<style lang="less" scoped>
html,body,.App{
    width: 100%;
    height: 100vh;
}
.App{
    overflow: hidden;
    overflow-y: scroll;
}
</style>