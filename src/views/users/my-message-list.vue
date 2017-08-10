<template>
	<div class="mui-content account" id="tabs">
		<div class="top">
			<div class="mui-row">
				<div class="mui-col-sm-5" style="border-right: 1px solid #e0e6ef;">
					<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
					<div class="tc">我的消息</div>
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
						<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
							<li class="mui-table-view-cell" @tap.stop.prevent="toggle(index,tab._id)" v-for="(tab,index) in tabList" :class="{active:active==index}" v-model="tabNum" :tab-num="tabNum">
								<div class="mui-table">
									<div class="mui-table-cell mui-col-xs-10">
										<h6 class="mui-ellipsis left-title">{{tab.type}}</h6>
										<p class="mui-h6 mui-ellipsis left-describe">{{tab.describe}}</p>
									</div>
									<div class="mui-table-cell mui-col-xs-2 mui-text-right left-created">
										<span class="mui-h5">{{tab.created}}</span>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="mui-col-sm-7">
					<div class="right">
						<tab :ListVal="tabList" :num="tabNum"></tab>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import tab from './message-details.vue'
	export default {
		components: {
			tab
		},
		created: function () {
			var _this = this;
			app.api.userInfo.userInfoList({
				data: {
					created_min:this.starTime,
					created_max:this.endTime,
				},
				success(response){
					_this.tabList = response.data;
					_this.titleList=['消息详情'];
					console.info(_this.tabList);
				},
				complete(){
				}
			});
		},
		data(){
			return {
				starTime: null,
				endTime: null,
				tabType:'消息详情',
				tabNum:1,
				tabList:[],
				pages:{},
			}
		},
		methods: {
			toggle(i,j) {
				this.active = i;
				this.tabNum=j;
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
	.left-title{

	}
	.left-created{
		width: 67.666667%;
	span{
		font-size: 12px;
	}
	}
</style>
