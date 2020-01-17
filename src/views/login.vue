<template>
    <div class="wrapper">
        <Heads seache="look"></Heads>
        <Bround :datas="contents" v-if="shows"></Bround>
        <main v-if="phone">
            <h4>{{title}}</h4>
            <p>新手机号将自动注册，请详读 <a href="javascript:;" @click="shows = true">豆瓣使用协议，隐私政策</a></p>
            <From>
                <Input type="text" :Numbers="true" :top="true"/>
                <Input type="password" :btns="true" :bottom="true"/>
                <button>登录</button>
                <ul>
                    <li><a href="javascript:;" @click="phone = false">账号密码登录</a></li>
                    <li><a href="javascript:;">收不到验证码?</a></li>
                </ul>

            </From>
        </main>
         <main v-else>
            <h4>账号密码登录</h4>
            <From>
                <Input type="text" :Numbers="isnumber" :top="true"/>
                <Input type="password" :bottom="true"/>
                <button>登录</button>
                <ul>
                     <li><a href="javascript:;" @click="phone = true; isnumber = false">短信验证登录 / 注册</a></li>
                      <li><a href="javascript:;" @click="isnumber = !isnumber">海外手机登录</a></li>
                    <li><a href="javascript:;">找回密码</a></li>
                </ul>

            </From>
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
    import  '../icons/svg/微信.svg';
    import  '../icons/svg/new.svg';
    import Footer from '../components/footer.vue';
    import From from '../components/from/from.vue';
    import Input from '../components/from/loginInput.vue';
    import Bround from '../components/bround.vue';
    import Heads from '../components/header.vue';
    export default {
        provide(){
            return {
                parents:this
            }
        },
        components: {
            Footer,
            From,
            Input,
            Bround,
            Heads
        },
        data() {
            return {
                class: true,
                title:"短信验证登录/注册",
                shows:false,
                phone:true,
                isnumber:false,
                contents:{
                    title:"豆瓣使用协议 & 豆瓣隐私政策",
                    message:[
                        {
                            title:"",
                            content:"请你务必审慎阅读、充分理解协议中相关条款内容，特别是粗体标注的内容。你一旦注册豆瓣，即视为你已了解并完全同意本协议各项内容，包括豆瓣对使用协议随时所做的任何修改。如你不同意本协议及/或随时对其的修改，请你立即停止注册及使用豆瓣所提供的全部服务。",
                        },
                        {
                            title:"1.接受条款",
                            content:`1.1 豆瓣网的运营者及相关关联公司（以下简称“豆瓣”）根据本使用协议的条款及不时发布的规则为你提供基于豆瓣网（包括豆瓣pc端、豆瓣及豆瓣相关客户端、移动网页端等）的互联网服务。本协议的条款可由豆瓣随时修改，修改后的使用协议在网站上一经公布即有效代替原来的使用协议。你一旦在豆瓣网注册，即成为豆瓣用户（以下简称“用户”或“你”），并受本协议的约束。
                                    1.2 当你使用豆瓣网单项服务时，你和豆瓣应遵守豆瓣随时公布的与该服务相关的指引和规则。前述所有的指引和规则，均构成本使用协议的一部分。
                                    1.3 你应遵守本协议的各项条款，合法合理使用豆瓣提供的服务，否则，豆瓣有权依据本协议中断或终止为你提供服务。同时，豆瓣保留在任何时候收回你所使用的账号的权利。`,
                        }
                    ]
                }
            }
        },
        mounted () {
            this.$on("close",()=>{
                this.shows = false
            })
        },
        methods: {
            broundHandler() {
                alert(1)
            },
            closeHandler(){

            }
        },
    }
</script>

<style lang="less" scoped>
@r:18.75rem;
.wrapper{
    border: 1px solid transparent;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba(158,158,158,.06);
    main{
        text-align: center;
        h4{
            font-size: 20 / @r;
            margin:80 / @r 0 10 / @r 0; 
        }
        p{
            font-size: 12 / @r;
            a{
                font-size: 12 / @r;
                color: #34ce4e;
            }
            margin-bottom: 20 / @r;
        }
        button{
            width:320 / @r;
            height: 40 / @r;
            background-color: rgba(142, 230, 124,0.5);
            border-radius: 6 / @r;
            border: none;
            color: white;
            font-size: 16 / @r;
            margin: 15 / @r 0 20 / @r 0;
        }
        ul{
            display: flex;
            justify-content: space-between;
            padding: 0 30 / @r;
            li{
                a{
                    font-size: 14 / @r;
                    color: #34ce4e;
                }
                &:last-of-type{
                    a{
                        color: #8f8f8f;
                    }
                }
            }
        }
    }
    .footers{
        position: fixed;
        left: 0;
        bottom:100 / @r;
    }
    .background{
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
    }
}
</style>