<template>
	<div class="list right-list" data-page="user-info-list">
		<div class="mui-table-view table-view none-list">
			<div  class="list-show" >
				<div class="title" v-for="t in ListVal" v-if="t._id===num">
					<div class="title">
						<h4>{{t.describe}}</h4>
						<div class="created">{{t.created}}</div>
					</div>
					<div class="content">{{t.content}}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			ListVal: {
				type: Array,
				required: true
			},
			num:{
				type: Number,
				required: true
			}
		},
		components: {

		},
		created: function() {

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
		padding: 5px;
		text-align: center;
		border-bottom: 1px solid #e0e6ef;
	h4{
		margin-top: -1rem;
	}
	.created{
		font-size: 0.5rem;
	}
	}
	.content{
		margin-top: 1rem;
	}
	}
	.list-info{
	.li{
		display: flex;
	}
	}
	}
</style>

