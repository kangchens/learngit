<template>
    <div class="background">
        <div class="content_msg" v-if="datas">
            <nav>
                <svg class="icon" @click="closeHandler()">
                    <use xlink:href="#icon-close"></use>
                </svg>
                <h5>{{datas.title}}</h5>
            </nav>
            <ul>
                <li v-for="item in datas.message" v-if="datas.message.length">
                    <h6>{{item.title}}</h6>
                    <p>{{item.content}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        inject:['parents'],
        props: {
            datas: {
                type: Object,
                default: {
                    title:"暂无消息",
                    message:[
                        {
                            tilte:"",
                            content:""
                        }
                    ]
                }
            }
        },
        mounted () {
            console.log("parents",this.parents)
        },
        methods: {
            closeHandler() {
                this.parents.$emit("close",)
            }
        },
    }
</script>

<style lang="less" scoped>
@r:18.75rem;
.background{
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.3);
    position: relative;
    .content_msg{
        width: 85%;
        max-height: 80%;
        background-color: #fff;
        border-radius: 10 / @r;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        padding: 20 / @r 10 / @r;
        padding-top: 80 / @r;
        nav{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            .icon{
                width: 30 / @r;
                height: 30 / @r;
            }
            h5{
                padding:0 0 20 / @r 0 ;
                text-align: center;
            }
        }
        
        ul{
            max-height: 500 / @r;
            overflow: hidden;
            overflow-y: scroll;
        }
        
    }
}
</style>