import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
 const usePost = () =>{
    const fetchPost = ()=>
   axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.data)
      
   
   return useQuery<Post[], Error>({
    queryKey: ['post'],
    queryFn: fetchPost,
    staleTime: 1*60*1000,
   }) }
    
   export default usePost;
 