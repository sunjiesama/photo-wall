import { FileImageOutlined } from '@ant-design/icons';
import { history } from 'umi';
export default () => {
  return (
    <div className="flex flex-wrap justify-around py-4">
      <div className="h-56 w-44">
        <div className="flex flex-col items-center justify-center w-full text-gray-500 bg-gray-300 h-44 ">
          <FileImageOutlined className="text-3xl" />
          <p className="pt-4">新建相册</p>
        </div>
      </div>

      {[1].map((i) => {
        return (
          <div
            className="h-56 w-44"
            key={i}
            onClick={() => {
              history.push('/detail');
            }}
          >
            <div className="flex-1 w-full text-gray-500 bg-gray-300 h-44">
              <img
                src="http://124.223.184.103/5280ba1afd0d40b27f781c011b1be8d.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-10">
              <p className="my-1 font-semibold">说说和日志相册</p>
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
