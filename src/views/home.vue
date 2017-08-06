<template>
    <div data-page="home">
		<div class="top-bg"></div>
		<div class="mui-content ">
			<div class="top">
				<div class="mui-row">
					<div class="mui-col-sm-3 mui-col-xs-12">
						<div class="user-info ">
							<div class="mui-card-header mui-card-media head" @tap.stop.prevent="goToUserCenter">
								<img src="../images/banner1.png" />
								<div class="mui-media-body">
									<p style="color: #025da6;">test</p>
									<p class="account-center"></p>
								</div>
							</div>
						</div>
					</div>
					<div class="mui-col-sm-6 mui-col-xs-12">
						<div>
							<div class="tip">
								<div class="icon"></div>
								<marquee direction="left" style="color: #004b8d;">某某某在分分彩中奖22222.00元</marquee>
							</div>
						</div>
					</div>
					<div class="mui-col-sm-3 mui-col-xs-12 none">
						<div class="mui-table-view-cell">
							<div class="recharge">0.0000</div>
						</div>
					</div>
				</div>
			</div>
			<div class="content mui-row">
				<div class="mui-col-sm-2">
					<div class="left">
						<div class="item">
							<div class="icon"></div>
							<div class="txt">彩票</div>
						</div>
						<div class="item none">
							<div class="icon"></div>
							<div class="txt">真人</div>
						</div>
						<div class="item none">
							<div class="icon"></div>
							<div class="txt">老虎机</div>
						</div>
					</div>
				</div>
				<div class="mui-col-sm-8 middle">
					<div class="mui-row ball-list">
						<div class="mui-col-sm-3 list" id="ball-1">
							<router-link :to="{name: 'customerBalls'}" class="active toolbar-link" >
								<img src="../images/ball-icon1.png" />
								<div class="tc">秒秒彩</div>
							</router-link>
						</div>
						<div class="mui-col-sm-3 list" id="ball-2">
							<router-link :to="{name: 'customerBalls'}" class="active toolbar-link" >
								<img src="../images/ball-icon2.png" />
								<div class="tc">QQ30秒</div>
							</router-link>
						</div>
						<div class="mui-col-sm-3 list" id="ball-3">
							<router-link :to="{name: 'customerBalls'}" class="active toolbar-link" >
								<img src="../images/ball-icon3.png" />
								<div class="tc">无线分分彩</div>
							</router-link>
						</div>
						<div class="mui-col-sm-3 list" id="ball-4">
							<router-link :to="{name: 'customerBalls'}" class="active toolbar-link" >
								<img src="../images/ball-icon4.png" />
								<div class="tc">加拿大3.5分彩</div>
							</router-link>
						</div>
					</div>
					<div class="mui-row ball-list">
						<div class="mui-col-sm-3 list" id="ball-5">
							<router-link :to="{name: 'customerBalls'}" class="active toolbar-link" >
								<img src="../images/ball-icon1.png" />
								<div class="tc">秒秒彩</div>
							</router-link>
						</div>
						<div class="mui-col-sm-3 list" id="ball-6">
							<router-link :to="{name: 'customerBalls'}" class="active toolbar-link" >
								<img src="../images/ball-icon2.png" />
								<div class="tc">QQ30秒</div>
							</router-link>
						</div>
						<div class="mui-col-sm-3 list" id="ball-7">
							<router-link :to="{name: 'customerBalls'}" class="active toolbar-link" >
								<img src="../images/ball-icon3.png" />
								<div class="tc">无线分分彩</div>
							</router-link>
						</div>
						<div class="mui-col-sm-3 list" id="ball-8">
							<router-link :to="{name: 'customerBalls'}" class="active toolbar-link" >
								<img src="../images/ball-icon4.png" />
								<div class="tc">加拿大3.5分彩</div>
							</router-link>
						</div>
					</div>
				</div>
				<div class="mui-col-sm-1 more">

					<div class="index_more"></div>
					<div class="tc">更多彩种</div>

				</div>
			</div>
			<div class="bottom">
				<div class="mui-row bottom-list">
					<div class="mui-col-sm-2 list">
						<img src="../images/bottom-icon1.png" />
						<p>设置</p>
					</div>
					<div class="mui-col-sm-2 list">
						<img src="../images/bottom-icon2.png" />
						<p>提现</p>
					</div>
					<div class="mui-col-sm-2 list">
						<img src="../images/bottom-icon3.png" />
						<p>活动</p>
					</div>
					<div class="mui-col-sm-2 list">
						<img src="../images/bottom-icon4.png" />
						<p>消息</p>
					</div>
					<div class="mui-col-sm-2 list">
						<img src="../images/bottom-icon5.png" />
						<p>客服</p>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
//import memberQrcode from './customerGather/customer-balls.vue'
module.exports = {
    data: function(){
        return {

        }
    },
    components: {},
    created: function(){
    },
    beforeRouteEnter: function(to, from, next) {
		next();
		return true;
	},
    methods: {
		goToUserCenter(){
			this.$router.push({name:"userCenter"});
		}
    },
    beforeRouteLeave: function(to, from, next) {
		next();
	}
};
</script>
<style lang="less" scoped>
	[data-page='home'] {
	}
</style>
