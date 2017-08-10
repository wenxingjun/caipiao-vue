<template>
	<div class="mui-content account" id="tabs">
		<div class="top">
			<div class="mui-row">
				<div class="mui-col-sm-5" style="border-right: 1px solid #e0e6ef;">
					<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
					<div class="tc">设置</div>
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
		},
		data(){
			return {
				starTime: null,
				endTime: null,
				active: 0,
				tabType:'账号管理',
				tabNum:null,
				tabList:{},
				titleList:['账号管理'],
				pages:{},
				tabs: [
					{
						type: '账号管理',
						view: 'tab1',
						imgUrl:'src/images/icon_acct.png'
					},
					{
						type: '银行卡',
						view: 'tab2',
						imgUrl:'src/images/card.png'
					},
					{
						type: '登录密码',
						view: 'tab3',
						imgUrl:'src/images/loginpwd.png'
					},
					{
						type: '资金密码',
						view: 'tab4',
						imgUrl:'src/images/funds.png'
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
						_this.titleList=['账号管理'];
						break;
					case 'tab2':
						_this.titleList=['银行卡'];
						break;
					case 'tab3':
						_this.titleList=['登录密码'];
						break;
					case 'tab4':
						_this.titleList=['资金密码'];
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
