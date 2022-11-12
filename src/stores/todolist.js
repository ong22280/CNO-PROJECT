import { defineStore } from 'pinia'
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase"

export const useTodoListStore = defineStore("todo",{
    state: ()=>({
       todoList: [] 
    }),
    getters: (state) =>{
        return state.todoList;
    },
    actions: {
        async fetchTodo(){
            // const querySnapshot = await getDocs(collection(db, "todoList"));
            // querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            const unsubscribe = onSnapshot(collection(db, "todoList"), (querySnapshot) => {
            querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            this.todoList = querySnapshot.docs.map((doc)=> doc.data())
        });
        });
        }
    }
})