<template>
	<div data-page="welcome">
		<div class="page-content">
			<div ref="slider" class="mui-slider mui-fullscreen" style="background-color: black;" @slide="slidePanel($event)">
				<div class="mui-slider-group">
					<!-- 第一张 -->
					<div class="mui-slider-item">
						<div class="item-logo one">
							<div class="animate guide-show">
							</div>
						</div>
					</div>
					<!-- 第二张 -->
					<div class="mui-slider-item">
						<div class="item-logo two">
							<div ref="tips2" class="animate mui-hidden">
							</div>
						</div>
					</div>
					<!-- 第三张 -->
					<div class="mui-slider-item">
						<div class="item-logo three">
							<div ref="tips3" class="animate mui-hidden">
								<button class="mui-btn mui-btn-warning mui-btn-outlined close" @tap.stop.prevent="goHome">立即体验</button>
							</div>
						</div>
					</div>
				</div>
				<!--<div class="mui-slider-indicator">-->
					<!--<div class="mui-indicator mui-active"></div>-->
					<!--<div class="mui-indicator"></div>-->
					<!--<div class="mui-indicator"></div>-->
					<!--<div class="mui-indicator"></div>-->
				<!--</div>-->
			</div>
		</div>
	</div>
</template>
<script>
	module.exports = {
		data() {
			return {index: 0};
		},
		mounted(){
			app.mui(this.$refs.slider).slider({interval:0});
		},
		methods: {
			slidePanel(e){
				this.index = e.detail.slideNumber + 1;
				if(this.index == 2 || this.index == 3){
					if(this.$refs["tips"+this.index].classList.contains("mui-hidden")){
						this.$refs["tips"+this.index].classList.remove("mui-hidden");
						this.$refs["tips"+this.index].classList.add("guide-show");
					}
				}
			},

			goHome(){
				app.globalService.setStartFlag(true);
				this.$router.push({name: "home"});
			}
		}
	}
</script>
<style lang="less" scoped>
	[data-page='welcome'] {
		.page-content {
			.close {
				position: absolute;
				width: 93px;
				left: 56%;
				margin-left: -80px;
				bottom: -23px;
				padding: 5px;
				color: transparent;
				background: transparent;
				border: none;
			}
			.item-logo {
				width: 100%;
				height: 100%;
				position: relative;
			}
			.one{
				background: url("../../images/one.png") no-repeat;
				background-size: cover;
				width: 100%;
				height: 100%;
			}
			.two{
				background: url("../../images/two.png") no-repeat;
				background-size: cover;
				width: 100%;
				height: 100%;
			}
			.three{
				background: url("../../images/three.png") no-repeat;
				background-size: cover;
				width: 100%;
				height: 100%;
			}
			.animate {
				position: absolute;
				left: 0;
				bottom: 15%;
				width: 100%;
				color: #fff;
				display: -moz-box;
			}
			.animated {
				-webkit-animation-duration: 1s;
				-webkit-animation-play-state: paused;
				-webkit-animation-fill-mode: both;
			}
			.guide-show .bounceInDown {
				-webkit-animation-name: bounceInDown;
				-webkit-animation-play-state: running;
				-webkit-animation-delay: 1s;
				display: block;
			}
			.guide-show .bounceInLeft {
				-webkit-animation-name: bounceInLeft;
				display: block;
				-webkit-animation-play-state: running;
			}
			.guide-show .bounceInRight {
				-webkit-animation-name: bounceInRight;
				display: block;
				-webkit-animation-play-state: running;
				-webkit-animation-delay: 0.5s;
			}
			@-webkit-keyframes bounceInDown {
				0%, 60%, 75%, 90%, 100% {
					-webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
					animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
				}
				0% {
					opacity: 0;
					-webkit-transform: translate3d(0, -3000px, 0);
					transform: translate3d(0, -3000px, 0);
				}
				60% {
					opacity: 1;
					-webkit-transform: translate3d(0, 25px, 0);
					transform: translate3d(0, 25px, 0);
				}
				75% {
					-webkit-transform: translate3d(0, -5px, 0);
					transform: translate3d(0, -5px, 0);
				}
				90% {
					-webkit-transform: translate3d(0, 3px, 0);
					transform: translate3d(0, 3px, 0);
				}
				100% {
					-webkit-transform: none;
					transform: none;
				}
			}
			@-webkit-keyframes bounceInLeft {
				0%, 60%, 75%, 90%, 100% {
					-webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
					animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
				}
				0% {
					opacity: 0;
					-webkit-transform: translate3d(-3000px, 0, 0);
					transform: translate3d(-3000px, 0, 0);
				}
				60% {
					opacity: 1;
					-webkit-transform: translate3d(25px, 0, 0);
					transform: translate3d(25px, 0, 0);
				}
				75% {
					-webkit-transform: translate3d(-10px, 0, 0);
					transform: translate3d(-10px, 0, 0);
				}
				90% {
					-webkit-transform: translate3d(5px, 0, 0);
					transform: translate3d(5px, 0, 0);
				}
				100% {
					-webkit-transform: none;
					transform: none;
				}
			}
			@-webkit-keyframes bounceInRight {
				0%, 60%, 75%, 90%, 100% {
					-webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
					animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
				}
				0% {
					opacity: 0;
					-webkit-transform: translate3d(3000px, 0, 0);
					transform: translate3d(3000px, 0, 0);
				}
				60% {
					opacity: 1;
					-webkit-transform: translate3d(-25px, 0, 0);
					transform: translate3d(-25px, 0, 0);
				}
				75% {
					-webkit-transform: translate3d(10px, 0, 0);
					transform: translate3d(10px, 0, 0);
				}
				90% {
					-webkit-transform: translate3d(-5px, 0, 0);
					transform: translate3d(-5px, 0, 0);
				}
				100% {
					-webkit-transform: none;
					transform: none;
				}
			}
		}
	}
</style>
