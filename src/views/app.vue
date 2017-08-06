<template>
	<div class="view">
			<transition :name="$store.state.routerStatus.transition">
				<!--<keep-alive>-->
				<router-view class="page"></router-view>
				<!--</keep-alive>-->
			</transition>
	</div>
</template>
<script>
	import '../css/mui.css'
	import "../css/mindex.css"
	import appRouters from "../js/components/app-routers"
	export default {
		data: function() {
			return {};
		},
		created() {
			this.initApp();
		},

		mounted(){
		},
		methods: {
			initApp: function() {
				var _this = this;
				//1.检查更新
				if(app.Config.isApp) {
//					app.ajax({
//						url: "http://demo.dcloud.net.cn/test/update/check.php",
//						success(result){
//							if(result !== app.Config.innerVersion){
//								//强制更新
//								app.mui.confirm("您的版本需要更新!", null, ["取消", "去下载"], function(result){
//									if(result.index === 1){
//										require(["../js/utils/update"], function(update){
//											update.updateWgt();
//										});
//									} else {
//										plus.runtime.quit();
//									}
//								});
//							} else if(!app.globalService.getStartFlag()){
//								//2.初始化是否启动欢迎页面
//								_this.$router.push({name: "welcome"});
//							}
//						},
//						error(){
//							if(!app.globalService.getStartFlag()){
//								_this.$router.push({name: "welcome"});
//							}
//						}
//					});
				}

				//2.初始化是否启动欢迎页面
				if(!app.globalService.getStartFlag()){
					this.$router.push({name: "welcome"});
				}
//				require(["../js/utils/site-utils.js", "../css/test.css"], function(utils){
//					console.info("app.vue AMD 加载");
//				});
			},
			//返回按钮
			goBack: function(){
				const _this = this, _goBack = function(){
					appRouters.back(function(routerOptions) {
						if(routerOptions && routerOptions.name) {
							_this.$router.push(routerOptions);
						} else if(routerOptions && routerOptions.url) {
							window.location.href = routerOptions.url;
						} else {
							_this.$router.push({name: 'home'});
						}
					}, JSON.stringify(_this.$store.state.routerStatus.backConfig)=="{}"?null:_this.$store.state.routerStatus.backConfig);
				}
				if(_this.$store.state.routerStatus.direction != "backing"){
					_this.$store.dispatch("updateDirection", "backing");
				}
				if(_this.$store.state.routerStatus.backConfig && typeof(_this.$store.state.routerStatus.backConfig.callback) === "function"){
					_this.$store.state.routerStatus.backConfig.callback(_goBack);
				} else {
					_goBack();
				}
				return true;
			}
		},
	};
</script>
