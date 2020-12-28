<template>
  <div @click="clickHandle">
    <header id="top"> <!-- 内容显示区域 ：width : 1211px -->
      <div id="top_box" class="user">
        <ul>
          <li><span><i class="iconfont">&#xe630;</i> 用户: 用户名占位</span></li>
          <li><a href="{% url 'logout' %}">退出登录</a></li>
<!--          判断未登陆时显示登陆/注册按钮-->
<!--          {% else %}-->
<!--          <li><a href="{% url 'login' %}">登录</a></li>-->
<!--          <li><a href="{% url 'register' %}">注册</a></li>-->
<!--          {% endif %}-->
        </ul>
      </div>
    </header>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" src="/static/images/logo.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card text="欢迎来到小羽毛报名系统~"></card>
      </div>
    </div>
    <main>
      <h3>所有活动</h3>
      <ul>
        <li>
          <h4><span>{{ i.activity_name }}</span><a href="/new_user/activity/{{ i.activity_number }}.html">查看详情</a></h4>
          <p>
            <span class="time"><i class="iconfont timeFlag" >&#xe67d;</i>&nbsp;{{ i.activity_start_time}}-{{i.activity_end_time.time}}</span>
            <span class="place"><i class="iconfont placeFlag" >&#xe609;</i>&nbsp;{{ i.activity_place}}</span>
            <span ><i class="iconfont fullFlag" >&#xe6b9;</i>&nbsp; <em>{{ i.is_full}}</em></span>
          </p>
        </li>
      </ul>
    <a href="/pages/counter/main" class="counter"> > 查看详情</a>
    </main>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const url = '../user/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
