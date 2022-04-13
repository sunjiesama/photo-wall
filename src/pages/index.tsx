import { useRequest } from 'ahooks';
import * as webApi from '@/apis/user';

export default () => {
  const { data, error, loading } = useRequest(webApi.getUserList);

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data?.context?.map((i) => {
        return <p key={i.id}>{i.name}</p>;
      })}
    </div>
  );
};
