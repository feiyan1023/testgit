var app=getApp();
Page({
 data:{
    controls: [{
      id: 1,
      iconPath: '/resources/pin.png',
      position: {
        left: (app.globalData.windowWidth-30)/2,
        top:  (app.globalData.windowHeight-30)/2-35,
        width: 30,
        height:30
      },
      clickable: false
    },
      {
        id: 1,
        iconPath: '/resources/center.png',
        position: {
          left: 40,
         top:app.globalData.windowHeight-120,
          width: 30,
          height: 30
        },
        clickable: true
      }]
 
 },
  controltap(){
    this.mapCtx.moveToLocation()
  },
  onShow(){
     wx.getLocation({
       type: 'gcj02',
       altitude: true,
       success: (res) =>{
          this.setData({
            longitude:res.longitude,
            latitude:res.latitude
          })
       }
     
     })
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
  },
  onShareAppMessage: function (res) {
   
    return {
      title: '交易平台',
      path: '/pages/index/index'
    }
  }
})