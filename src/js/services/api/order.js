
import app from '../../app'

define(function () {
    if (app.Config && app.Config.isDebug) {
        //前端调试模式
        return {
            "queryOrderList": function(ajaxOptions){
            	if(app.Config.isApp){
            		return new Promise(function(resolve, reject) {
            			if(ajaxOptions.success && typeof(ajaxOptions.success) === "function"){
            				ajaxOptions.success(require("../../data/order.json").result);
            			}
        				resolve();
    				});
            	}
            	return app.ajax($.extend({
		            url: require("file-loader!../../data/order.json"),
		        }, ajaxOptions));
            }
        }
    } else {
        //开发模式
        return {
        	//查询订单列表
            "queryOrderList": function(ajaxOptions){
            	return app.ajax($.extend({
		            url: "/api/queryOrderList",
		        }, ajaxOptions));
            }
        }
    }
});
