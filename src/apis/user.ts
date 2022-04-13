import request from 'umi-request';

type LoginInfo = {
  username: string;
  password: string;
};

/**
 * @description 获取用户列表
 */
export async function getUserList() {
  return request<Result<UserInfo[]>>('/api/user/userList', {
    method: 'GET',
  });
}
/**
 * @description 登录
 */
export async function login(params: LoginInfo) {
  return request<Result<UserInfo>>('/api/user/login', {
    method: 'POST',
    data: params,
  });
}

/**
 * @description 注册
 */
export async function registered(params: LoginInfo) {
  return request<Result<any>>('/api/user/registered', {
    method: 'POST',
    data: params,
  });
}
