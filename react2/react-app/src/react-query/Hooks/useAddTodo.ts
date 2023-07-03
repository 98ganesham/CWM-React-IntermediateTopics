import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./useTodos";
import { useRef } from "react";
import { CACHE_KEY_TODOS } from "../constants";

interface AddTodoContext {
    previousTodos: Todo[]
}


const useAddTodo = (onAdd: () => void) => {
    const queryClinet = useQueryClient();
   return  useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: (todo: Todo)=>
        axios
        .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
        .then(res => res.data),

        onMutate: (newTodo: Todo) => {
           const previousTodos = queryClinet.getQueryData<Todo[]>(['todos']) || [];
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
        onError: (error, newTodo, context ) =>{
            if(!context) return ;
            queryClinet.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
        }
    });
    
    
}
export default useAddTodo;