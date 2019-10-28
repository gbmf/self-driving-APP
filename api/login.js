import Ajax from '../libs/http'
//登录接口
export function POST_LOGIN(payload) {
    return Ajax.post('/users/login/?json', payload)
};
//获取验证码
export function GET_Password(params) {
    return Ajax.get(`/users/emailscode/${params}?json`, {
        params
    });
}
//重置密码
export function SET_Password(payload) {
    return Ajax.post('/users/find_password?json', payload);
}
//修改地址
export function User_Address(payload) {
    return Ajax.post('/users/org_user_list/?json', payload);
}
//获取用户基本信息
export function Get_UserMsg(payload) {
    return Ajax.get('/users/org_user_list/?json&myinfo', payload);
}
//-------------xin
//发送手机验证码（注册或者密码找回时使用）
export function Get_PhoneCode(phone,params) {
    return Ajax.get('/users/phonecode/'+phone,{params});
}
//注册
export function Post_Signup(payload) {
    return Ajax.post('/users/register/',payload);
}