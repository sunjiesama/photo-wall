import { useParams } from 'umi';

/**
 * @description 获取url里的参数
 * @param value:string
 * @returns string
 *
 * @example const capacityId = useGetQuery('capacityId');
 */
const useGetQuery = (value: string) => {
  const query = useParams<any>();
  return query[value];
};

export default useGetQuery;
