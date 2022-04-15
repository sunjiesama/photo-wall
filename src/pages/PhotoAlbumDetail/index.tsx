import React, { useEffect, useState } from 'react';
import * as webApi from '@/apis/photo';
import useGetQuery from '@/utils/useGetQuery';

const BASE_IMG_URL = 'http://124.223.184.103/';

export default () => {
  const photoalbumid = useGetQuery('photoalbumid');

  const [data, setData] = useState<webApi.PhotoList[]>();

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
                  <React.Fragment key={i.url}>
                    <div className="w-1/2 p-1 h-44">
                      <img
                        src={BASE_IMG_URL + i.url}
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
