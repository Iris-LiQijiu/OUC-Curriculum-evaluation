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
  }
})
