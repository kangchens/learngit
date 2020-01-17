<template>
    <div class="footers">
        <footer class="ohter_login">
            <h5>第三方登录</h5>
            <ul class="ul">
                <li>
                    <svg class="icon"  >
                        <use xlink:href="#icon-微信"></use>
                    </svg>
                    
                </li>
                <li>
                <svg class="icon" >
                        <use xlink:href="#icon-qq"></use>
                    </svg>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
@r:18.75rem;
.footers{
    width: 100%;
    .ohter_login{
        text-align: center;
        h5{
            margin-bottom: 30 / @r;
            color: darkgray;
            font-size: 16 /@r;
        }
        ul{
            padding:0 30%;
            display: flex;
            justify-content: space-between;
            li{
                width: 50 / @r;
                height: 50 / @r;
                border-radius: 50%;
                text-align: center;
                line-height: 60 / @r;
                background-color: #fff;
                box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);
                .icon{
                    width: 30 / @r;
                    height: 30 / @r;
                    vertical-align: -0.15em;
                    fill: currentColor;
                    overflow: hidden;
                }
            }
        }
    }
}
</style>