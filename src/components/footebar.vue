<template>
    <div class="footerBar">
        <router-link v-for="item in bar" :to="item.path">
            
            <Bar :className="item.name+'-active'" :title="item.name" v-if="$route.path == item.path" class="active"></Bar>
            <Bar :className="item.name" :title="item.name" class="no" v-else></Bar>
        </router-link>
    </div>
</template>

<script>
    import Bar from './bar.vue';
    export default {
        data() {
            return {
                bar: [
                    {
                        name:"首页",
                        path:"/main/index"

                    },
                    {
                        name:"书影音",
                        path:"/main/book"
                    },
                    {
                        name:"小组",
                        path:"/main/team"
                    },
                    {
                        name:"市集",
                        path:"/main/shop"
                    },
                    {
                        name:"我的",
                        path:"/main/mine"
                    }
                ]
            }
        },
        components: {
            Bar,
        },
    }
</script>

<style lang="less" scoped>
.footerBar{
    width: 100%;
    display: flex;
    justify-content:space-around;

}
</style>