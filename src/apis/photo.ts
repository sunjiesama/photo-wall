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

/**
 * @description 获取相册列表
 */
export async function getPhotoList() {
  return request<Result<PhotoList[]>>('/api/photo/list', {
    method: 'GET',
  });
}
