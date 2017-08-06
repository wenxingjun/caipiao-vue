<template>
	<div class="mui-content account" id="tabs">
		<div class="top">
			<div class="mui-row">
				<div class="mui-col-sm-5" style="border-right: 1px solid #e0e6ef;">
					<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
					<div class="tc">我的大圣</div>
				</div>
				<div class="mui-col-sm-7">
					<div class="tc" id="title" v-for="i in titleList">{{i}}</div>
				</div>
			</div>
		</div>
		<div class="account-content">
			<div class="mui-row" id="account-list">
				<div class="mui-col-sm-5">
					<div class="left">
						<ul class="mui-table-view table-view">
							<li class="mui-table-view-cell table-view-cell">
								<div class="bl">个人</div>
							</li>
						</ul>
						<ul class="mui-table-view table-view" id="left-list">
							<li class="mui-table-view-cell mui-media table-view-cell"  @tap.stop.prevent="toggle(index,tab.view)" v-for="(tab,index) in tabs" :class="{active:active==index}" v-model="tabNum" :tab-num="tabNum">
								<a href="javascript:;" class="mui-navigate-right">
									<img class="mui-media-object mui-pull-left icon"  :src="tab.imgUrl">
									<div class="mui-media-body">
										<div class="tc">{{tab.type}}</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="mui-col-sm-7">
					<div class="right">
						<tab :ListVal="tabList" :TitleVal="titleList" :Page="pages"></tab>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import tab from './user-info-list.vue'
	export default {
		components: {
			tab
		},
		created: function () {
			var _this = this;
			app.api.myorder.orderlist({
				data: {
					created_min:this.starTime,
					created_max:this.endTime,
				},
				success(response){
					_this.tabList = response;
					_this.titleList=['投注记录'];
				},
				complete(){

				}
			});
		},
		data(){
			return {
				starTime: null,
				endTime: null,
				active: 0,
				tabType:'投注记录',
				tabNum:null,
				tabList:{},
				titleList:['投注记录'],
				pages:{},
				tabs: [
					{
						type: '投注记录',
						view: 'tab1',
						imgUrl:'src/images/account-icon1.png'
					},
					{
						type: '追号记录',
						view: 'tab2',
						imgUrl:'src/images/account-icon2.png'
					},
					{
						type: '账变记录',
						view: 'tab3',
						imgUrl:'src/images/account-icon3.png'
					},
					{
						type: '充值记录',
						view: 'tab4',
						imgUrl:'src/images/account-icon4.png'
					},
					{
						type: '提现记录',
						view: 'tab5',
						imgUrl:'src/images/account-icon5.png'
					},
				]
			}
		},
		methods: {
			toggle(i,j) {
				this.active = i;
				this.tabNum=j;
				var _this=this;
				switch (_this.tabNum){
					case 'tab1':
						_this.titleList=['投注记录'];
					    break;
					case 'tab2':
						_this.titleList=['追号记录'];
						break;
					case 'tab3':
						_this.titleList=['账变记录'];
						break;
					case 'tab4':
						_this.titleList=['充值记录'];
						break;
					case 'tab5':
						_this.titleList=['提现记录'];
						break;
				}
			},

		},
		mounted () {

		}
	}
</script>
<style scoped>
	#tabs{
		background: #eff5ff !important;
	}
</style>

