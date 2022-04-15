const Page404: IRouter = {
  path: '/404',
  layout: false,
  component: '@/pages/ErrorPage/index',
};

const routers: IRouter[] = [
  { path: '/', component: '@/pages/PhotoAlbum/index' },
  {
    path: '/detail/:photoalbumid',
    component: '@/pages/PhotoAlbumDetail/index',
  },
  { path: '/login', component: '@/pages/Login/index' },
];

routers.push(Page404);
export default routers;
