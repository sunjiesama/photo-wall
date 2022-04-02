import request from "umi-request";

type Data = {
  name: string;
  age: number;
};

/**
 * @description
 */
export async function getUserList() {
  return request<Result<Data[]>>("/test/user/userList", {
    method: "GET"
  });
}
