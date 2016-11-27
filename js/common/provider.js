myApp.config(function ($stateProvider,$urlRouterProvider) {
	//配置状态机的各个状态
	$stateProvider
		.state('tabs', {
		url: '/tabs',
		abstract: true,
		templateUrl: 'template/tabs.html'
		
		})
		// 消息
		.state('tabs.message', {
			url: '/message',
			views: {
				'tab-message': {
					templateUrl: 'template/tab-message.html',
					controller: 'messageCtrl'
				}
			}
		})
	
		// 联系人
		.state('tabs.contacts',{
			url:'/contacts',
			views:{
				'tab-contacts':{
					templateUrl: 'template/tab-contacts.html',
					controller: 'contactsCtrl'
				}
			}
		})
	
		// 动态
		.state('tabs.dynamic',{
			url:'/dynamic',
			views:{
				'tab-dynamic':{
					templateUrl: 'template/tab-dynamic.html',
					controller: 'dynamicCtrl'
				}
			}
		})
	//首页默认跳转
	$urlRouterProvider.otherwise("/tabs/message");

});