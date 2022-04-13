declare interface Window {
  token: string;
}

declare interface UserInfo {
  id: number;
  name: string;
  age: number;
  gender: number;
  password: string;
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

/**
 * 路由
 */
declare interface IRouter {
  /**
   * 匹配的路径
   */
  path: string;

  /**
   * 渲染的组件
   */
  component?: string;

  name?: string; // 兼容此写法

  /**
   * 是否展示 layout
   */
  layout?: boolean;

  /**
   * 路由的子项
   */
  routes?: IRouter[];

  /**
   * 重定向
   */
  redirect?: string;

  /**
   * 图标
   * @example icon:"testicon"
   */
  icon?: string;

  /**
   * 是否新页面打开
   * @example target:_blank
   */
  target?: string;
  /**
   * 是否展示顶栏
   */
  headerRender?: boolean;

  /**
   * 是否展示页脚
   */
  footerRender?: boolean;

  /**
   * 是否展示菜单
   */
  menuRender?: boolean;

  /**
   * 是否展示菜单顶栏
   */
  menuHeaderRender?: boolean;

  /**
   * 权限配置，需要与 plugin-access 插件配合使用
   */
  access?: string;

  /**
   * 是否隐藏子菜单
   */
  hideChildrenInMenu?: boolean;

  /**
   * 是否隐藏自己和子菜单
   */
  hideInMenu?: boolean;

  /**
   * 是否在面包屑中隐藏
   */
  hideInBreadcrumb?: boolean;

  /**
   * 是否子项往上提，仍旧展示
   */
  flatMenu?: boolean;

  /**
   * 重定向菜单的高亮
   */
  parentKeys?: [string];

  meat?: string;
}
