<template>
    <div class="headers clearboth">
        <slot name="other" class="others"></slot>
        <slot name="title"></slot>
        <div class="seache" v-if="seache == 'seache'">
            <section class="turn-left">
                <svg class="icons big">
                    <use xlink:href="#icon-big"></use>
                </svg>
                <input type="text">
                <svg class="icons copy">
                    <use xlink:href="#icon-copy"></use>
                </svg>
            </section>
            <svg class="icons email turn-right">
                <use xlink:href="#icon-email"></use>
            </svg>
        </div>
        <div class="login turn-right" v-else-if="seache == 'look'">
            <span>先去逛逛  </span>
            <svg class="icons big">
                <use xlink:href="#icon-arrow"></use>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            seache: {
                type: String,
                default: ""
            }
        },
    }
</script>

<style lang="less" scoped>
@r:18.75rem;
.headers{
    width: 100%;
    min-height: 70 / @r;
    line-height: 70 / @r;
    padding: 0 10 / @r;
    padding-top: 20 / @r;
    .others{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .icons{
       width: 30 / @r;
       height: 30 / @r;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
       vertical-align: middle;
    }
    section{
        line-height: 0;
        position: relative;
        input{
            width: 300 / @r;
            height: 30 / @r;
            border-radius: 15 / @r;
            border: none;
            padding: 0 35  /@r;
            background-color: rgba(192, 192, 192,.2);
            vertical-align: middle;
        }
        .big,.copy{
            position: absolute;
            width: 20 / @r;
            height: 20 / @r;
            top: 50%;
            transform: translate(0,-50%);
        }
        .big{

            left: 10 / @r;
        }
        .copy{
            right: 10 / @r;
        }
    }
}
.diff{
    background-color: #34ce4e;
    .seache{
        section{
            input{
                background-color: #fff;
            }
        }
        .email{
            fill: #fff
        }
    }
}
.login{
    line-height: 30 / @r;
    span{
        color: #b1adad;
        font-size: 12 / @r;
    }
    .icons{
        width: 15 / @r;
        height: 15 / @r;
        fill: #b1adad
    }
}
</style>