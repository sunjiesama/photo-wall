import React from 'react';
import { useRequest } from 'ahooks';
import * as webApi from '@/apis/photo';

const BASE_IMG_URL = 'http://124.223.184.103/';

export default () => {
  const { data, error, loading } = useRequest(webApi.getPhotoList);

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      {data?.context.map((timeItem) => {
        return (
          <div key={timeItem.time}>
            <p className="px-2 mb-0 text-base font-semibold">{timeItem.time}</p>
            <div className="flex flex-wrap">
              {timeItem.list.map((i) => {
                return (
                  <React.Fragment key={i.url}>
                    <div className="m-2 w-44 h-44">
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
