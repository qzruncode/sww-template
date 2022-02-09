window.onload = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js', {
        scope: './',
      })
      .then(registration => {
        let serviceWorker;
        if (registration.installing) {
          serviceWorker = registration.installing;
        } else if (registration.waiting) {
          serviceWorker = registration.waiting;
        } else if (registration.active) {
          serviceWorker = registration.active;
        }
        if (serviceWorker) {
          serviceWorker.addEventListener('statechange', function (e) {
            console.log('sw的状态改变：' + e.target.state);
          });
        }
      });
    navigator.serviceWorker.onmessage = e => {
      console.log(1111, e);
      const { data } = e;
      if (data.type === 'FetchError') {
        // 请求失败;
      } else if (data.type === 'NetWorkError') {
        // 断网
      } else if (data.type === 'RefreshClient') {
        // 刷新页面，有新版本的sw安装
        location.reload();
      }
    };
  } else {
    console.log('sw不支持');
  }
};
