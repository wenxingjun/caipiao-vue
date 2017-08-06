
import app from '../../app'

define(function () {
	if (app.Config && app.Config.isDebug) {
		//前端调试模式
		return {
			"orderlist": function(ajaxOptions){
				if(app.Config.isApp){
					return new Promise(function(resolve, reject) {
						if(ajaxOptions.success && typeof(ajaxOptions.success) === "function"){
							ajaxOptions.success(require("../../data/myorders.json").result);
						}
						resolve();
					});
				}
				return app.ajax($.extend({
					url: require("file-loader!../../data/myorders.json"),
				}, ajaxOptions));
			}
		}
	} else {
		//开发模式
		return {
			//查询订单列表
			"orderlist": function(ajaxOptions){
				return app.ajax($.extend({
					type: "POST",
					url: "/bet/lists",
				}, ajaxOptions));
			}
		}
	}
});
