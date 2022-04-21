import React, { useEffect, useState } from 'react';
import * as webApi from '@/apis/photo';
import useGetQuery from '@/utils/useGetQuery';
import { message, Upload } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import { createPortal } from 'react-dom';
import Portal from '@/pages/components/Portal';
const BASE_IMG_URL = 'http://124.223.184.103/';

export default () => {
  const photoalbumid = useGetQuery('photoalbumid');
  const props = {
    name: 'uploadFile',
    // 是否支持多选文件
    multiple: false,
    // 是否展示文件列表
    showUploadList: false,
    // 上传的地址
    action: '/api/photo/addPhoto',
    headers: {
      authorization: 'authorization-text',
    },
    data: { photoalbumid },
    accept: '.jpg,.png',
    beforeUpload: (file: any) => {
      const isJpgOrPng =
        file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('图片类型不正确!');
      }
      // const isLt1M = file.size / 1024 / 1024 < 1;
      // if (!isLt1M) {
      //   message.error('我网络不好,接受不了超过1M的照片!');
      // }
      return isJpgOrPng;
    },
    onChange(info: any) {
      if (info.file.status === 'done') {
        console.log(info);

        if (info?.file?.response?.code === '200') {
          message.success('上传成功');
          webApi.getPhotoList({ photoalbumid }).then((res) => {
            if (res.code === '200') {
              setData(res.context);
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

  const [data, setData] = useState<webApi.PhotoList[]>();
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState('');
  useEffect(() => {
    webApi.getPhotoList({ photoalbumid }).then((res) => {
      if (res.code === '200') {
        setData(res.context);
      }
    });
  }, []);

  return (
    <>
      {data?.map((timeItem) => {
        return (
          <div key={timeItem.time}>
            <p className="px-2 mb-0 text-base font-semibold">{timeItem.time}</p>
            <div className="flex flex-wrap">
              {timeItem.list.map((i) => {
                return (
                  <React.Fragment key={i.id}>
                    <div className="w-1/2 p-1 overflow-hidden h-44">
                      <img
                        src={BASE_IMG_URL + i.url}
                        alt=""
                        className="object-cover w-full h-full rounded"
                        onClick={() => {
                          setVisible(true);
                          setUrl(BASE_IMG_URL + i.url);
                        }}
                      />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="w-1/2 h-56 px-1">
        <div className="flex flex-col items-center justify-center w-full overflow-hidden text-gray-300 bg-gray-200 rounded h-44">
          <Upload {...props}>
            <FileImageOutlined className="text-3xl" />
            <p className="pt-4">上传照片</p>
          </Upload>
        </div>
      </div>
      <div>
        {createPortal(
          <Portal
            url={url}
            visible={visible}
            closePortal={() => {
              setVisible(false);
            }}
          />,
          document.body,
        )}
      </div>
    </>
  );
};
