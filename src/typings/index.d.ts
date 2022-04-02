declare interface Window {
  token: string;
}

declare interface Params {
  /**
   * 页数
   */
  pageNum: number;

  /**
   * 每页条数
   */
  pageSize: number;
}

declare interface Result<T> {
  /**
   * 结果码
   */
  code: string;
  /**
   * 内容
   */
  context: T;
  /**
   * 消息内容
   */
  message: string;
}
