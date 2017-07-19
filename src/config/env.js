/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

     var host = "http://10.10.217.18"//yuqing.chinaso.com
     // other host base
     var host2 = "http://sentiment.chinaso365.com"
     var host3 = "http://10.10.217.17:8080"

     //http://localhost:8080/sentiment-service/emergency/search
     var api = {
         latestDynamic: host3 + "/sentiment-service/dongtai/all",
         Outburst: host3 + "/sentiment-service/emergency/search",
         dynamic: host2 + '/sentiment/status/pie',
         login: host + "/user/login",
         logout: host + "/user/logout",
         isLogin: host + "/user/isLogin"
     }


let routerMode = 'history';
let imgBaseUrl = 'http://images.cangdu.org/';
let baseUrl;

if (process.env.NODE_ENV == 'development') {

   baseUrl = 'http://10.10.217.17:8080/sentiment-service/';
}else if(process.env.NODE_ENV == 'production'){

	// baseUrl = 'http://cangdu.org:8001';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}
