<template>
	<div class="container bottom_fix" id="bottomx">
		<div class="mui-content" style="#efefef">
			<div class="mui-row">
				<div class="logo"></div>
			</div>
			<div class="username">
				<label class="icon user-icon"></label>
				<input type="text" id="username" placeholder="请输入您的姓名" required  @focus="focusName=tenancyName" v-focus:tenancyName="focusName" v-model="tenancyName"/>
			</div>
			<div class="password">
				<label class="icon pass-icon"></label>
				<input type="password" id="password" placeholder="请输入您的密码" required  @focus="focusName=password" v-focus:password="focusName" v-model="password"/>
			</div>
			<div class="login-btn" @tap.stop.prevent="sumbit($event)">登录</div>
			<div class="back-pass">忘记密码？</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			tenancyName: null,
			password: null,
			focusName: null
		}
	},
	methods: {
		sumbit(e){
			var _this = this;
			if(!_this.tenancyName){
				_this.focusName = "tenancyName";
				app.mui.toast('请输入账号');
				return;
			}
			if(!_this.password){
				_this.focusName = "password";
				app.mui.toast('请输入密码');
				return;
			}
			app.mui(e.target).button('loading');
			app.api.user.login({
				data: {
					tenancyName: _this.tenancyName,
					password: _this.password
				},
				success(data){
					app.globalService.setUserInfo({
						tenancyName: _this.tenancyName
					});
					_this.go();
				},
				complete(){
					app.mui(e.target).button('reset');
				}
			});
		},

		go: function(){
//			const [_this, _toName, _current_query] = [this, this.$route.query.toName, this.$route.query];
//			if(_toName){
//				delete _current_query.toName;
//				this.$router.push({name: _toName, query: _current_query});
//			} else {
//				this.$router.push({name: "home"});
//			}

			this.$router.push({name: "home"});
		}
	}
}
</script>

