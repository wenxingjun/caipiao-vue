
import app from '../../app'

define(function () {
    if (app.Config && app.Config.isDebug) {
        //前端调试模式
        return {

            "userInfoList": function(ajaxOptions){
            	if(app.Config.isApp){
            		return new Promise(function(resolve, reject) {
            			if(ajaxOptions.success && typeof(ajaxOptions.success) === "function"){
            				ajaxOptions.success(require("../../data/myInfo.json").result);
            			}
        				resolve();
    				});
            	}
            	return app.ajax($.extend({
		            url: require("file-loader!../../data/myInfo.json"),
		        }, ajaxOptions));
            }
        }
    } else {
        //开发模式
        return {
        	//消息列表
            "userInfoList": function(ajaxOptions){
            	return app.ajax($.extend({
            		type: "GET",
		            url: config.webapiDomain + "/api/info",
		        }, ajaxOptions));
            }
        }
    }
});
