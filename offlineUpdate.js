
const request = require('request');
request.post({
    url: 'https://game-offline.1sapp.com/offline/updateouterbag',
    form: {   
        "offlineId": 43,
        "bagEnv": "offline",
        "conversion": "0, 0",
        "gameUrl": "http://h5.wpgame.com.cn/qmddz/?app_id=a3DU28NdpPFW&app_name=%E6%8E%8C%E5%BF%83%E5%85%A8%E6%B0%91%E6%96%97%E5%9C%B0%E4%B8%BB&appid=a3DU28NdpPFW&dc=&ext=eyJzb3VyY2UiOiIifQ%3D%3D&origin_type=0&platform=qtt&sign=edd5dfa4d0e5099a0b48df37c96cb185&source=&ticket=t11XPh8qATFxKucPz23oM&time=1567128481&uuid="
    }
}, function callback(err, httpResponse, body) {
    console.log(JSON.parse(body))
})