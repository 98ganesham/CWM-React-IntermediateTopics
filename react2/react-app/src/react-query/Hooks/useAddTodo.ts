import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";
interface AddTodoContext {
    previousTodos: Todo[]
}
const useAddTodo = (onAdd: () => void) => {
    const queryClinet = useQueryClient();
   return  useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: todoService.post,
       
        onMutate: (newTodo: Todo) => {
           const previousTodos = queryClinet.getQueryData<Todo[]>([CACHE_KEY_TODOS]) || [];
             queryClinet.setQueryData<Todo[]>(CACHE_KEY_TODOS, 
            (todos = [])=> [ 
                newTodo, 
                ...todos,]);
                    onAdd();
                    
                    return {previousTodos};
                
            
        },
     onSuccess: (savedTodo, newTodo) => {
        queryClinet.setQueryData<Todo[]>
        (CACHE_KEY_TODOS, (todos) => todos?.map
        ((todo )=> todo === newTodo ? savedTodo : todo))
            

        },
        onError: (error ,newTodo, context ) =>{
            if(!context) return ;
            queryClinet.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
        }
    });
    
    
}
export default useAddTodo;