<template>
  <div class="">
    <div class="text-yellow-500 text-center p-3 star3">
      <div class="zoom-in-out-infinite">
        <p class="text-5xl font-bold mt-5">Galaxy is now in danger . . .</p>
        <p class="text-3xl mt-3">Tell us what to do .</p>
      </div>
    </div>
    <div class="star4">
      <form @submit.prevent="addTodo">
        <div class="flex justify-center p-10">
          <input
            v-model="newTodoContent"
            class="block rounded-lg text-3xl bg-gray-200 border-gray-400 border-2 shadow-md text-stone-700"
            type="text"
            placeholder="type new mission"
          />
          <button
            :disabled="!newTodoContent"
            class="block text-white p-3 mx-2 bg-orange-600 rounded-xl hover:bg-orange-500"
          >
            Launch
          </button>
        </div>
      </form>
      <div class="flex flex-wrap mx-5">
        <div
          v-for="todo in todos"
          :key="todo.id"
          class="flex-col text-white m-2 bg-gray-700 hover:bg-gray-600 rounded-lg justify-center max-w-xs border-gray-600 border-2"
        >
          <div
            class="p-10 font-semibold text-yellow-500 text-lg text-center max-w-xs "
          >
            {{ todo.content }}
          </div>
          <div class="flex justify-center">
            <button class="px-10 mb-2" @click="likeButton(todo.id)">
              <font-awesome-icon
                icon="fa-solid fa-circle-up"
                class="text-3xl text-green-500 hover:text-green-400 hover:scale-125"
              />
              <p>{{ todo.like }}</p>
            </button>
            <button class="px-10 mb-2" @click="dislikeButton(todo.id)">
              <font-awesome-icon
                icon="fa-solid fa-circle-down"
                class="text-3xl text-red-500 hover:text-red-400 hover:scale-125"
              />
              <p>{{ todo.dislike }}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import {
  addDoc,
  collection,
  onSnapshot,
  updateDoc,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "@/firebase";
const todos = ref([]);
//firebase ref
const todoCollection = collection(db, "todoList");
const todoCollectionSorted = query(todoCollection, orderBy("sum", "desc"));
onMounted(() => {
  onSnapshot(todoCollectionSorted, (querySnapshot) => {
    const fbTodos = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        like: doc.data().like,
        dislike: doc.data().dislike,
        sum: doc.data().sum,
      };
      fbTodos.push(todo);
    });
    todos.value = fbTodos;
  });
});
const newTodoContent = ref("");
const addTodo = () => {
  addDoc(todoCollection, {
    content: newTodoContent.value,
    like: 0,
    dislike: 0,
    sum: 0,
  });
  newTodoContent.value = "";
};
const likeButton = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id);
  updateDoc(doc(todoCollection, id), {
    like: (todos.value[index].like += 1),
    sum: (todos.value[index].sum += 1),
  });
};
const dislikeButton = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id);
  updateDoc(doc(todoCollection, id), {
    dislike: (todos.value[index].dislike += 1),
    sum: (todos.value[index].sum -= 1),
  });
};
</script>

<style></style>
