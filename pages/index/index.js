const db=wx.cloud.database()//数据库初始化
Page({

  data:{
    Teacher:""
  },

  //查询
  Submit2(res){
    db.collection("TeacherList")
      .where({//查询指令 条件筛选用where
        classname:res.detail.value.searchname
      })
      .get()//获取数据
      .then(res=>{//then可以让回调函数呈链式分布
        console.log(res)
        this.setData({
          Teacher:res.data
        })
      })
  },
  //添加数据
  
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


