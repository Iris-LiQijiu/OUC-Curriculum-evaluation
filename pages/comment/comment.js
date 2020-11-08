const db=wx.cloud.database
page({
  Submit(res){
    wx.showLoading({
      title: 'Loading...',
      mask:true
    })//防止一次性多次点击 和hideloading呼应

   // var {classname,teacher,comment}=res.detail.value;//把输入框里的值保存在var对象里
    
    var ALL=res.detail.value;//直接把整个对象给ALL变量
    db.collection("TeacherList")
    .add({
      
      // data:{
      //   classname:classname,
      //   teacher:teacher,
      //   comment:comment
      // }//比较复杂
      
      data:ALL//简单~
    })
    .then(res=>{
      wx.hideLoading({
        success: (res) => {},
      })
    })
  }
})