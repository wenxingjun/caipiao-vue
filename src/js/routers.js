import globalService from './services/global-service'
import appRouters from "./components/app-routers"

export default {
	routes: [{
		path: '/', //首页
		name: "home",
		meta: { title: "首页" },
		component: require('../views/home.vue') //resolve => require(['../views/home.vue'], resolve)
	},{
		path: '/users/user-center', //用户中心
		name: "userCenter",
		meta: { title: "个人中心" },
		component: require('../views/users/user-center.vue')
	},{
		path: '/users/my-message-list', //消息中心
		name: "myMessageList",
		meta: { title: "消息列表" },
		component: require('../views/users/my-message-list.vue')
	},{
		path: '/users/message-details', //消息中心
		name: "messageDetails",
		meta: { title: "消息详情" },
		component: require('../views/users/message-details.vue')
	},{
		path: '/users/user-set', //用户设置
		name: "userSet",
		meta: { title: "个人资料" },
		component: require('../views/users/user-set.vue')
	},{
		path: '/users/reset-password', //个人资料
		name: "resetPassword",
		meta: { title: "重设密码" },
		component: require('../views/users/reset-password.vue')
	},{
		path: '/users/register', //注册
		name: "register",
		meta: {auth: false, title: "注册" },
		component: require('../views/users/register.vue')
	},{
		path: '/users/login', //登录
		name: "login",
		meta: {auth: false, title: "登录" },
		component: require('../views/users/login.vue')
	},{
		path: '/customerGather/customer-balls',
		name: "customerBalls",
		meta: {title: "投注" },
		component: require('../views/customerGather/customer-balls.vue')
	}, {
		path: '/users/welcome', //登录
		name: "welcome",
		meta: {auth: false, title: "启动欢迎" },
		component: require('../views/users/welcome.vue')
	},{
		path: '*', //未发现该页面
		name: "notFound",
		meta: {auth: false, title: "未发现该页面"},
		component: require('../views/error/404.vue')
	}],

	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
		if (to.hash) {
			return { selector: to.hash};
		}
	},

	//创建路由
	createRouter(VueRouter, store){
		var _this = this;
		var router = new VueRouter({
			//路由列表
			routes: _this.routes,
			scrollBehavior: _this.scrollBehavior,
			base: "/",
			linkActiveClass: "router-link-active"
		});
		//const [_push, _go, _replace] = [router.push, router.go, router.replace];
		const {push, go, replace} = router;
		router.push = function(location) {
			if(!store.state.routerStatus.direction){
				store.dispatch("updateDirection", "going");
			}
			push.call(this, location);
		}
		router.go = function(location) {
			if(store.state.routerStatus.direction != "backing"){
				store.dispatch("updateDirection", "backing");
			}
			app.log.error("路由错误");
			if(location > 0){
				store.dispatch("updateDirection", "going");
			} else {
				store.dispatch("updateDirection", "backing");
			}
			go.call(this, location);
		}
		router.replace = function(location) {
			if(store.state.routerStatus.direction != "replace"){
				store.dispatch("updateDirection", "replace");
			}
			replace.call(this, location);
		}
		router.beforeEach((to, from, next)=>_this.beforeEach(to, from, next, store));
		router.afterEach((router)=> _this.afterEach(router, store));
		return router;
	},

	//访问之前的函数
	beforeEach(to, from, next, store){
		if(JSON.stringify(store.state.routerStatus.backConfig) !== "{}") {
			store.dispatch("resetBackConfig");
		}
		if(to.meta.auth !== false && !globalService.isLogin()){
			next({name: 'login', query: Object.assign({toName: to.name}, to.query)});
			return;
		}
		next();
		const _direction = store.state.routerStatus.direction;
		if(!_direction) {
			store.dispatch("updateDirection", appRouters.isGoing(false, window.location.href) ? "going" : "backing");
		} else if(_direction === "replace"){
			appRouters.pop();
		}
		switch(to.name) {
			case 'home':
				store.dispatch("updateNavbarStatus",{isShowHead: false, isShowBack: false});
				appRouters.clear();
				break;
			case 'userCenter':
				store.dispatch("updateNavbarStatus",{isShowHead: false, isShowBack: false});
				appRouters.clear();
				break;
			case 'customerBalls':
				store.dispatch("updateNavbarStatus",{isShowHead: false, isShowBack: false});
				appRouters.clear();
				break;
			case 'login':
				store.dispatch("updateNavbarStatus",{isShowBack: false, isShowHead: true, isShowFoot: false});
				appRouters.clear();
				break;
			case 'welcome':
				store.dispatch("updateNavbarStatus",{isShowBack: false, isShowHead: false, isShowFoot: false});
				appRouters.clear();
				break;
			default:
				store.dispatch("updateNavbarStatus",{isShowFoot: false});
				break;
		}
		appRouters.push(_direction && (store.state.routerStatus.direction == "going" || store.state.routerStatus.direction == "backing" || store.state.routerStatus.direction == "replace"), {
			name: to.name,
			query: to.query,
			url: window.location.href
		});
		store.dispatch("updateDirection", null);
	},

	//可以记录访问路径
	afterEach(router, store){
		if(router.meta.title && router.meta.title != store.state.appData.navbarTitle){
			store.dispatch("updateNavbarTitle", router.meta.title);
			document.title = "大圣彩-" + router.meta.title || "";
		}
	}
}
