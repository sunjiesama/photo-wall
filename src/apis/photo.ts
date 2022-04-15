import request from 'umi-request';

type PhotoItem = {
  id: number;
  time: string;
  url: string;
  describe: string;
};

export type PhotoList = {
  time: string;
  list: PhotoItem[];
};

type Photoalbumid = {
  photoalbumid: string;
};

export type AlbumItem = {
  id: number;
  photoalbumid: string;
  url: string;
};

/**
 * @description 获取相册详情
 */
export async function getPhotoList(params: Photoalbumid) {
  return request<Result<PhotoList[]>>('/api/photo/list', {
    method: 'POST',
    data: params,
  });
}

/**
 * @description 获取相册列表
 */
export async function getPhotoAlbum() {
  return request<Result<AlbumItem[]>>('/api/photo/albumList', {
    method: 'GET',
  });
}
