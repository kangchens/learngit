<template>
    <div id="wrapper">
        <header class="headbg">
            <Headers>
                <template v-slot:other>
                    <div class="others">
                        <svg class="icons set">
                            <use xlink:href="#icon-set"></use>
                        </svg>
                        <svg class="icons set">
                            <use xlink:href="#icon-email"></use>
                        </svg>
                    </div>
                </template>
            </Headers>
            <nav class="user_msg clearboth">
                <img class="user_iocn turn-left" :src='useIcon' alt="">
                <div class="message turn-left">
                    <strong>陈康 0000</strong>
                    <p><span>关注 1</span><span>被关注 0</span></p>
                </div>
                <span class="backs turn-right">个人主页<i class="el-icon-arrow-right"></i></span>
            </nav>
        </header>
        
        我的

    </div>
</template>

<script>
    import Headers from '../../components/header.vue';
    import users from '../../assets/user.jpg'
    export default {
        components: {
            Headers
        },
        data() {
            return {
                user:users,
                useIcon:require('../../assets/user.jpg')
            }
        },
        mounted () {
            
        },
        methods: {
            
        },
    }
</script>

<style lang="less" scoped>
@r:18.75rem;
#wrapper{
    width: 100%;
    height: 100%;
    .headbg{
        & *{
            color: #fff;
        }
        width:100%;
        height:160 / @r;
        background: url("../../assets/beijing.jpg");
        .set{
            fill: #fff;
        }
        .user_msg{
            padding: 0 10 / @r;
            .user_iocn{
                width: 60 / @r;
                height: 60 / @r;
                border-radius: 50%;
                border: 2px solid #fff;

            }
            .message{
                margin-left: 20 / @r;
                color: #fff;
                strong{
                }
                p{
                    
                    margin-top: 10 / @r;
                    span{
                        font-size: 12 / @r;
                        margin-right: 10 / @r;
                    }
                }
            }
            .backs{
                font-size: 11 / @r;
                vertical-align: middle;
                i{
                    margin-left: 5 / @r;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>