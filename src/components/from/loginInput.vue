<template>
    <div class="content" :class="[{'top':top},{'bottom':bottom}]">
        <a href="#" v-if="Numbers">+86</a>
        <input v-bind="$attrs" :class='[{"numberInput":Numbers }]'>
        <button v-if="btns">获取验证码</button>
    </div>
</template>

<script>
    export default {
        inheritAttrs:false,
        props:{
            Numbers:{
                type:Boolean,
                default:false
            },
            btns:{
                type:Boolean,
                default:false,
            },
            top:{
                type:Boolean,
                default:false
            },
            bottom:{
                type:Boolean,
                default:false
            },
        }
    }
</script>

<style lang="less" scoped>
@r:18.75rem;
.content{
    width: 100%;
    text-align: center;
    position: relative;
    input{
        width:320 / @r;
        height: 45 / @r;
        border: 1px solid #8f8f8f;
        padding: 0 10 / @r;
        font-size: 16 / @r;
    }
    .numberInput{
        padding-left:90/ @r;
    }
    a{
        position: absolute;
        left: 60 / @r;
        top: 50%;
        transform: translate(0 ,-50%);
        border-right:1px solid #8f8f8f;
        padding-right: 15 / @r;
    }
    button{
        position: absolute;
        right: 60 / @r;
        top: 50%;
        transform: translate(0 ,-50%);
        background-color: transparent;
        border: none;
        color: #34ce4e;
        font-size: 18 / @r;
    }
}
.top{
    input{
        border-top-left-radius: 5 / @r;
        border-top-right-radius: 5 / @r;
    }
}
.bottom{
    input{
        border-top: none;
        border-bottom-left-radius: 5 / @r;
        border-bottom-right-radius: 5 / @r;
    }
}
</style>