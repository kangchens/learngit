<template>
    <div class="icons-bin">
        <svg class="icon"  >
            <use :xlink:href="'#icon-'+className"></use>
        </svg>
        <p>{{title}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            className: {
                type: String,
                default: ""
            },
            title:{
                type: String,
                default: ""
            }
        },
    }
</script>

<style lang="less" scoped>
@r:18.75rem;
.icons-bin{
    text-align: center;
    .icon{
        width: 25 / @r;
        height: 25 / @r;
    }
    p{
        margin-top: 3 / @r;
        font-size: 12 / @r;
    }
}
.active{
    .icon{
        width: 25 / @r;
        height: 25 / @r;
        fill: #34ce4e;
    }
    p{
        margin-top: 3 / @r;
        font-size: 12 / @r;
        color: #34ce4e;
    }
}
</style>