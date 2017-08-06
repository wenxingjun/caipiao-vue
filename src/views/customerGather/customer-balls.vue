<template>
	<div data-page="customer-balls" class="order-bg ">
		<div class="top">
			<a class="mui-action-back mui-pull-left"></a>
			<div class="logo"><img src="../../images/mmc.png" alt="" /></div>
			<div class="recharge"></div>
			<div class="server"></div>
		</div>
		<!--<div class="left" id="openPopover">-->
			<!--五星直选复式-->
			<!--<div class="icon"></div>-->
		<!--</div>-->

		<div class="content" id="select-group5">
			<div id="tzNums" style="display: none;"></div>
			<div class="mui-row nList" v-for="(l,n) in 5">
				<div class="mui-col-sm-1 title" v-for="(unit,j) in list" v-if="j===n" :data-list="j" :unit="unit.en">{{unit.cn}}</div>
				<div class="mui-col-sm-1 ballList" v-for="(item,index) in 10" v-if="index>0" ><span>{{index}}</span></div>
				<div class="mui-col-sm-1 order-type">
					<div class="box">
						<span class="all">全</span>
						<span class="big">大</span>
						<span class="small">小</span>
					</div>
					<div class="box">
						<span class="clear" @tap.stop.prevent="clear" >清</span>
						<span class="ji">单</span>
						<span class="ou">双</span>
					</div>
				</div>
			</div>
		</div>
		<div class="right">
			<ul>
				<li class="kaijiang">
					<div class="icon"></div><span>开奖</span></li>
				<li class="touzhu">
					<div class="icon"></div><span>投注</span></li>
				<li class="zhangbian">
					<div class="icon"></div><span>账变</span></li>
				<li class="shoucang">
					<div class="icon"></div><span>收藏</span></li>
			</ul>
		</div>
		<div class="order-bottom">
			<div class="mui-row">
				<div class="mui-col-sm-2 unit white">元</div>
				<div class="mui-col-sm-4 num white">
					<div class="reduce minus_btn" @tap.stop.prevent="decrement"></div>
					<span class="bg" id="beishu" v-model="count">{{count}}</span>
					<div class="add plus_btn" @tap.stop.prevent="increment"></div>
				</div>
				<div class="mui-col-sm-4 all">
					<div class="mui-row">
						<span>共</span>
						<span id="selectionBallStakes" class="red">0</span>
						<span>注，</span>
						<span id="selectionBallAmount" class="red">0</span>
						<span>元</span>
					</div>
				</div>
				<div class="mui-col-sm-1">
					<div id="addBallToCart" class="zhuihao"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {mapGetters, mapActions} from 'vuex'
export default {
	name: 'app',
	data() {
		return {
			list:[
				{
				    cn:'万',
					en:'w'
				},
				{
					cn:'千',
					en:'q'
				},
				{
					cn:'百',
					en:'b'
				},
				{
					cn:'十',
					en:'s'
				},
				{
					cn:'个',
					en:'g'
				},
			],
		};
	},
	created:function () {
		$(function () {
			function quickly_select(elm, need, not) {
				var list = $(elm).parent().parent().parent().find('.ballList');
				if (need && not) {
					list.filter(not).removeClass('selected');
					list.filter(need).addClass('selected');
				} else {
					if (need === false) {
						list.removeClass('selected');
					} else {
						list.addClass('selected');
					}
				}
				touzhu();
			}
			$('body').on('click','.ballList',function () {
				$(this).toggleClass('selected');
			});
			$('body').on('click','.ji',function () {
				quickly_select(this, ':even', ':odd');
			});
			$('body').on('click','.ou',function () {
				quickly_select(this, ':odd', ':even');
			});
			$('body').on('click','.clear',function () {
				quickly_select(this, false);
			});
			$('body').on('click', '.big',function () {
				quickly_select(this, ':gt(4)', ':lt(5)');
			});
			$('body').on('click', '.small',function () {
				quickly_select(this, ':lt(5)', ':gt(4)');
			});
		})
	},
	mounted(){
		app.mui(this.$refs.slider).slider({interval:0});
	},
	computed:{
		...mapGetters([
			'count',
		])
	},
	methods:{
		...mapActions([
			'increment',
			'decrement',
			'clear'
		]),

	}
}
</script>
<style scoped>
	[data-page='customer-balls']{

	}
</style>

