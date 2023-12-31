import { useInfiniteQuery} from "@tanstack/react-query";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../constants";




interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
  
  interface PostQuery{
   
   pageSize: number;
   
  }
 const usePosts = (query: PostQuery) => useInfiniteQuery<Post[],Error>({
     queryKey: [CACHE_KEY_TODOS, query],
      queryFn:({pageParam = 1})=> axios
      .get('apiClient',{
         params: {
            _start:  (pageParam - 1) * query.pageSize,
            _limit: query.pageSize
         }})
      
      .then(res => res.data),
   staleTime: 1*60*1000,
   keepPreviousData: true,
   getNextPageParam: (latsPage, allPages) =>{
      return latsPage.length > 0 ? allPages.length +1 : undefined;
   }

   });
   export default usePosts;
 