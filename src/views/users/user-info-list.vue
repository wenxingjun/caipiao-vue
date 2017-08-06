<template>
	<div class="list right-list" data-page="user-info-list">
		<div class="mui-table-view table-view none-list">
			<div class="nav-li" v-if="ListVal.total===0" >
				<img src="../../images/wx_def_bg.png" alt="" />
				<div class="tc">无记录</div>
			</div>
			<div v-else="ListVal.total!=0" class="list-show" >
				<div class="title" v-for="t in ListVal" >{{t.total}}</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			ListVal: {
				type: Object,
				required: true
			},
			TitleVal: {
				type: Array,
				required: true
			}

		},
		components: {

		},
		created: function(ListVal) {

		},
		watch: {

		},
		methods: {

		},
		data() {
			return {

			}
		}
	}
</script>
<style lang="less" scoped>
	[data-page='user-info-list'] {
	.list-show {
		.title {
			margin-bottom: 1rem;
			font-size: 1rem;
			line-height: 1rem;
			height: 1rem;
			text-align: center;
			border-bottom: 1px solid #e0e6ef;
			}
		}
		.list-info{
			.li{
				display: flex;
			}
		}
	}
</style>

