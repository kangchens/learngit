<template>
    <div class="wrapper">
        <Headers>
            <template v-slot:title>
                <div class="title">
                    <ul>
                        <li>豆瓣豆品</li>
                        <li>豆瓣时间</li>
                    </ul>
                </div>
            </template>
        </Headers>
        shop
    </div>
</template>

<script>
    import Headers from '../../components/header.vue';
    export default {
        components: {
            Headers,
        },
    }
</script>

<style lang="less" scoped>
.wrapper{
    .title{
        ul{
            display: flex;
            justify-content: space-around;
            li{
                position: relative;
                &::before{
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    height: 0;
                    width: 100%;
                    border: 1px solid rgb(143, 216, 33);
                }
            }
        }
    }
}
</style>