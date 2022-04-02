import { useRequest } from "ahooks";
import { getUserList } from "@/apis/user";

export default () => {
  const { data, error, loading } = useRequest(getUserList);

  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data?.context?.map((i) => {
        return <p key={i.name}>{i.name}</p>;
      })}
    </div>
  );
};
