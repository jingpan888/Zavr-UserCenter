<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2018/7/4
  Time: 17:22
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="Pragma" content="no-cache">
  <meta http-equiv="Cache-Control" content="no-cache">
  <meta http-equiv="Expires" content="0">
  <title>后台管理</title>
  <link href="login.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" type="text/css" href="lib/layer/2.4/skin/layer.css" />
</head>

<body>
<div class="login_box">
  <div class="login_l_img"><img src="images/login-img.png" /></div>
  <div class="login" id="app">
    <div class="login_logo"><a href="#"><img src="images/login_logo.png" /></a></div>
    <div class="login_name">
      <p>SaaS后台管理系统</p>
    </div>
    <form method="post">
      <input name="username" type="text"  value="用户名" onfocus="this.value=''" onblur="if(this.value==''){this.value='用户名'}" v-model="uname">
      <span id="password_text" onclick="this.style.display='none';document.getElementById('password').style.display='block';document.getElementById('password').focus().select();" >密码</span>
      <input name="password" type="password" id="password" style="display:none;" onblur="if(this.value==''){document.getElementById('password_text').style.display='block';this.style.display='none'};" v-model="pwd"/>
      <input value="登录" style="width:100%;" type="button" onclick="login()">
    </form>
  </div>
  <!--<div class="copyright">某某有限公司 版权所有©2016-2018 技术支持电话：000-00000000</div>-->
</div>
<div style="text-align:center;">
  <!--
  <p>更多模板：<a href="http://www.mycodes.net/" target="_blank">源码之家</a></p> -->
</div>
<script type="text/javascript" src="html/lib/jquery/1.9.1/jquery.min.js"></script>
<script type="text/javascript" src="lib/layui/layui.all.js"></script>
<script type="text/javascript" src="lib/vue.min.js"></script>
<script type="text/javascript" src="lib/request.js"></script>
<script>
    var vue = new Vue({
        el: '#app',
        data: {
            uname:'',
            pwd:''
        }
    });
    // checkCookie();
  $(function () {

  })

  function login() {
      if(vue.uname==''){
          layer.msg("请输入正确的登录名",{icon:5});
          return;
      }
      if(vue.pwd==''){
          layer.msg("请输入正确的密码",{icon:5});
          return;
      }

      var param = "{\"UserName\":\""+vue.uname+"\",\"Password\":\""+vue.pwd+"\"}"
      $.ajax({
          type: "post",
          url: CreateEnterprise,
          data: {param:param},
          dataType: "json",
          success: function(data){
              console.log(JSON.stringify(data));
              if(data.Success){
                  layer.msg('登录成功', {icon: 6,time:5000});
              }else{
                  layer.msg(data.Message, {icon: 5});

              }
          },error:function(err){
              layer.msg('程序异常，错误代码'+JSON.stringify(err), {icon: 5});
          }
      });
  }
</script>
</body>
</html>

