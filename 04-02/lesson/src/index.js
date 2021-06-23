console.log('hello, this is dell');

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js')
			.then(registration => {
				console.log('service-worker registed');
			}).catch(error => {
				console.log('service-worker register error');
			})
	})
}

// npm install workbox-webpack-plugin -D
//线上代码才要做pwa处理，使得即使服务器挂掉依然有缓存可以访问