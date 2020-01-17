<template>
    <div class="contents">
        <router-view></router-view>
        <FootBar class="footbar"></FootBar>
    </div>
</template>

<script>
    import FootBar from '../components/footebar.vue';
    import Headers from '../components/header.vue';
    export default {
        components: {
            FootBar,
            Headers
        },
        mounted () {
            // console.log(this.$route.path);
            
        },
    }
</script>

<style lang="less" scoped>
@r:18.75rem;
.contents{
    width: 100%;
    height: 100%;
    position: relative;
    .footbar{
        width: 100%;
        height: 100 / @r;
        padding:10 / @r 0;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: rgb(248, 248, 248);
        border-top:1px solid #c7c6c6;
    }
}
</style>