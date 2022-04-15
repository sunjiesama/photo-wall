import { FileImageOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { history } from 'umi';

import * as webApi from '@/apis/photo';
import { useEffect, useState } from 'react';

export default () => {
  const props = {
    name: 'uploadFile',
    // 是否支持多选文件
    multiple: false,
    // 是否展示文件列表
    showUploadList: false,
    // 上传的地址
    action: '/api/photo/addPhotoAlbum',
    headers: {
      authorization: 'authorization-text',
    },
    accept: '.jpg,.png',
    beforeUpload: (file: any) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('图片类型不正确!');
      }
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (!isLt1M) {
        message.error('我网络不好,接受不了超过1M的照片!');
      }
      return isJpgOrPng && isLt1M;
    },
    onChange(info: any) {
      if (info.file.status === 'done') {
        console.log(info);

        if (info?.file?.response?.code === '200') {
          message.success('上传成功');
          webApi.getPhotoAlbum().then((res) => {
            if (res.code === '200') {
              setList(res.context);
            }
          });
        } else {
          message.error('上传失败');
        }
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const [List, setList] = useState<webApi.AlbumItem[]>();

  useEffect(() => {
    webApi.getPhotoAlbum().then((res) => {
      if (res.code === '200') {
        setList(res.context);
      }
    });
  }, []);

  return (
    <div className="flex flex-wrap py-4">
      <div className="w-1/2 h-56 px-1">
        <div className="flex flex-col items-center justify-center w-full overflow-hidden text-gray-500 bg-gray-200 rounded h-44">
          <Upload {...props}>
            <FileImageOutlined className="text-3xl" />
            <p className="pt-4">新建相册</p>
          </Upload>
        </div>
      </div>

      {List?.map((i) => {
        return (
          <div
            className="w-1/2 h-56 px-1"
            key={i.id}
            onClick={() => {
              history.push(`/detail/${i.photoalbumid}`);
            }}
          >
            <div className="flex-1 w-full overflow-hidden text-gray-500 bg-gray-300 rounded h-44">
              <img
                src={`http://124.223.184.103/${i.url}`}
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-10">
              <p className="my-1 font-semibold">记录</p>
              <p className="mb-0 text-xs">
                <span>152张</span> <span>私密</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
