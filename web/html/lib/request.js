var url = "http://192.168.40.13:9001/usercenter/";
var vrurl = "http://192.168.40.13:9001/product/";
var contenturl = "http://192.168.40.13:9001/contentcenter/";


var domain = ".zavrs.com";//.zavrs.com

 // var tokenUrl = "https://zavrs.com/product/vr/1/getToken";
 // var gennerVr = "http://47.105.54.189:8877/api/Vr/Generate/";
 // var contenturl = "https://zavrs.com/contentcenter/";
 // var url = "https://zavrs.com/usercenter/";
 // var vrurl = "https://zavrs.com/product/";



var QueryEnterprises = url + "Enterprise/QueryEnterprises";//分页企业信息
var GetEnterprisesByKey = url + "Enterprise/GetEnterprise";//获取企业信息
var SetEnterprise = url + "Enterprise/SetEnterprise";//修改企业信息
var CreateEnterprise = url + "Enterprise/CreateEnterprise";//新增企业信息
var EnterprisegetKeyName = url + "Enterprise/getKeyName";//获取企业列表回显
var SetEnterpriseState = url + "Enterprise/SetEnterpriseState";//修改企业状态
var GetEnterpriseAndAgentKeyName = url + "Enterprise/GetEnterpriseAndAgentKeyName";//获取企业信息  代理信息回显
var QueryEnterpriseUsers = url + "EnterpriseUserProfile/QueryEnterpriseUsers";//企业员工分页
var ResetEnterpriseUserPassword = url + "EnterpriseUserProfile/ResetEnterpriseUserPassword";//重置企业员工密码
var SetEnterpriseUserPassword = url + "EnterpriseUserProfile/SetEnterpriseUserPassword";//修改企业员工密码
var GetEnterpriseUser = url + "EnterpriseUserProfile/GetEnterpriseUser";//获取企业员工信息
var CreateEnterpriseUser = url + "EnterpriseUserProfile/CreateEnterpriseUser";//新增企业员工信息
var SetEnterpriseUser = url + "EnterpriseUserProfile/SetEnterpriseUser";//修改企业员工信息
var SetEnterpriseUserState = url + "EnterpriseUserProfile/SetEnterpriseUserState";//修改企业员工状态
var GetEnterpriseUserByAccount = url + "EnterpriseUserProfile/GetEnterpriseUserByAccount";//根据账号查询企业用户信息
var SaasLogin = url + "UserAuth/TerminalUserProfileLogin";//登录
var AgentGetKeyName = url + "Agent/getKeyName";//获取代理信息
var GetUserMenus = url + "SysMenus/getSysMenusByPosition";//获取用户菜单列表
//员工，权限
var QueryPlatUsers = url + "PlatUserProfile/findPlatPage";//分页员工信息
var GetPlatUserProfileByKey = url + "PlatUserProfile/findPlatById";//获取权限员工信息
var GetPlatUserRoleInformationByKey = url + "PlatUserProfile/findPlatUserById";//获取角色信息
var SearchPlatDepartment = url + "PlatUserDepartment/findPlatDepartment" // 查询所有部门信息
var SearchPlatPosition = url + "PlatUserPosition/findPlatPosition"//查询所有部门职务信息
var SetPlatUserProfile = url + "PlatUserProfile/SetPlatUser";//修改员工信息
var CreatePlatUserProfile = url + "PlatUserProfile/CreatePlatUser";//新增员工信息
var SetPlatUserState = url + "PlatUserProfile/SetPlatUserState";//修改平台员工状态
var ResetPlatUserProfileUserPassword = url + "PlatUserProfile/SetPlatUserPassword";//重置平台员工密码
var QueryPositionUsers = url + "PlatUserPosition/findPlatPositionCount"//分页查询部门，职务信息
var AddDepartment = url + "PlatUserDepartment/InsertUserDepartment";//添加部门信息
var AddPosition = url + "PlatUserPosition/insertPosition";//添加职位信息
var UpdateDepartAndPosition = url + "PlatUserPosition/updateDepartmentAndPosition";//修改部门和职务信息
var SearchPositionByKey = url + "PlatUserPosition/findByPositionId"//按照职位Id获取职务权限信息
var GetAllMenus = url + "SysMenus/getAllMenus";//获取所有的菜单
var UpdateRoleMenus = url + "SysMenus/savePositionMenus";//修改职位权限
var SearchEmployeeInformation = url + "PlatUserProfile/findPlatUserById";//获取员工角色信息
var ModifyPlatUserPassword = url + "PlatUserProfile/ModifyPlatUserPassword"//修改平台员工密码
var SearchPlatUserPhone = url + "PlatUserProfile/findPhoneByUserProfile";//查询手机号是否重复


var QueryAgents = url + "Agent/QueryAgents";//分页代理信息
var AddAgent = url + "Agent/CreateAgent";//创建代理
var GetAgentByKey = url + "Agent/GetAgent";//获取代理信息
var selectAgent = url + "Agent/selectAgent";//会员详情获取会员信息
var SetAgent = url + "Agent/SetAgent";//修改代理信息
var SetAgentState = url + "Agent/SetAgentState";//修改代理状态
var QueryAuditAgents = url + "Agent/QueryAuditAgents";//查询审核状态的代理信息
var AgentResetPassword = url + "Agent/AgentResetPassword";//重置用户密码
var selectRoles = url + "MemberRoles/selectRoles";//编辑用户页面角色下拉列表
var setPayment = url + "Agent/setPayment";//用户续费
var detectionIphone = url + "Agent/detectionIphone";//检测手机号是否重复


var GetAgentUserByAccount = url + "GetAgentUserByAccount";//此接口用于根据代理员工账号，查询账号基本信息
var GetAgentUser = url + "GetAgentUser";//此接口用于根据代理员工编号，查询账号基本信息
var QueryAgentUsers = url + "QueryAgentUsers";//此接口用于根据分页查询条件，查询出符合的代理员工账号列表
var ResetAgentUserPassword = url + "ResetAgentUserPassword";//此接口用于重置代理员工账号密码
var SetAgentUserState = url + "SetAgentUserState";//此接口用于修改代理员工账号状态
var SetAgentUser = url + "SetAgentUser";//此接口用于修改代理员工账号基本信息
var CreateAgentUser = url + "CreateAgentUser";//此接口用于新增代理员工账号
var getAgentNameList = url + "getAgentNameList";//此接口用于模糊查询代理名称

var uploadd = url + "upload";//此接口用于上传Logo
var getImg = url + "getImg";//此接口用于预览Logo
var BusinessLicense = url + "BusinessLicense";//上传营业执照
var getBusinessLicense = url + "getBusinessLicense"//预览营业执照

var QueryVR = vrurl + "vr/QueryCheck";
var Review = vrurl + "vr/Review";//审核  更新可通用
var Refuse = vrurl + "vr/Refuse";//审核拒绝
var img_upload = contenturl + "T_Consults/upload";//上传图片
var PageQueryVr = vrurl + "vr/findAllVrs"//Vr分页显示

var QueryRecommend = vrurl + "recommend/QueryRecommend";//推荐列表
var updateRecommend = vrurl + "recommend/updateRecommend";//取消推荐ByID
var updateIsRecommend = vrurl + "recommend/updateIsRecommend";//取消推荐ByFid
var addRecommend = vrurl + "recommend/addRecommend";//添加推荐


var QueryBanner = contenturl + "Banner/QueryBanner";//Banner 列表
var AddBanner = contenturl + "Banner/insert";//Banner 新增
var updateBanner = contenturl + "Banner/updateBanner";//Banner 修改

var productList = vrurl + "pano/queryByPage";//作品列表
var productUpdate = vrurl + "pano/updatePano";//作品更新
var insertRecommend = vrurl + "PanoRecommend/insertRecommend";//新增推荐
var updateReconmend = vrurl + "PanoRecommend/updateReconmend";//推荐修改
var getCategory = vrurl + "pano/getSysCategory";//新增作品 分类获取

var rolelist = url + "MemberRoles/queryPageMemberRoles";//角色列表
var fucntionlist = url + "VrFunction/getListInfo";//权限配置列表信息
var memberroleslist = url + "MemberRoles/queryPageMemberRoles";//角色列表
var insertMenberRoles = url + "MemberRoles/insertMenberRoles";//新增角色
var updateMenberRoles = url + "MemberRoles/updateMenberRoles";//角色更新
var valiCountName = url + "MemberRoles/valiCountName";//权限名称重复验证

var pathname = document.location.pathname;//项目名称
// var url = window.location.href;//"http://localhost:8080/Zavr-UserCenter/";连接url
// alert(url.indexOf(pathname)!=-1);
var url = window.location.href.split("/");
// alert(pathname);
if (("/" + url[url.length - 2] + "/").indexOf(pathname) == -1 && pathname != '/index.html') {
    valiLogin();
}


UrlParam = function () { // url参数
    var data, index;
    (function init() {
        data = []; // 值，如[["1","2"],["zhangsan"],["lisi"]]
        index = {}; // 键:索引，如{a:0,b:1,c:2}
        var u = window.location.search.substr(1);
        if (u != '') {
            var params = decodeURIComponent(u).split('&');
            for (var i = 0, len = params.length; i < len; i++) {
                if (params[i] != '') {
                    var p = params[i].split("=");
                    if (p.length == 1 || (p.length == 2 && p[1] == '')) {// p |
                        // p= |
                        // =
                        data.push(['']);
                        index[p[0]] = data.length - 1;
                    } else if (typeof (p[0]) == 'undefined' || p[0] == '') { // =c
                        // 舍弃
                        continue;
                    } else if (typeof (index[p[0]]) == 'undefined') { // c=aaa
                        data.push([p[1]]);
                        index[p[0]] = data.length - 1;
                    } else {// c=aaa
                        data[index[p[0]]].push(p[1]);
                    }
                }
            }
        }
    })();
    return {
        // 获得参数,类似request.getParameter()
        param: function (o) { // o: 参数名或者参数次序
            try {
                return (typeof (o) == 'number' ? data[o][0] : data[index[o]][0]);
            } catch (e) {
            }
        },
        // 获得参数组, 类似request.getParameterValues()
        paramValues: function (o) { // o: 参数名或者参数次序
            try {
                return (typeof (o) == 'number' ? data[o] : data[index[o]]);
            } catch (e) {
            }
        },
        // 是否含有paramName参数
        hasParam: function (paramName) {
            return typeof (paramName) == 'string' ? typeof (index[paramName]) != 'undefined'
                : false;
        },
        // 获得参数Map ,类似request.getParameterMap()
        paramMap: function () {
            var map = {};
            try {
                for (var p in index) {
                    map[p] = data[index[p]];
                }
            } catch (e) {
            }
            return map;
        }
    }
}();

// 设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";path=/;domain=" + domain + "; "
        + expires;
}

//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}

//清除cookie
function clearCookie(name) {
    setCookie(name, '', 1);
    valiLogin();
    // var exp = new Date();
    // exp.setTime(exp.getTime() - 1);
    // alert(getCookie('islogin') + "===getCookie");
}

function checkCookie() {
    var user = getCookie("islogin");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 1);
        }
    }
}

function valiLogin() {
    if (getCookie('islogin') == '') {
        top.location = "/"

        // window.location.href = "/"
    }
}