<template>
  <div class="containerDiv">
    <TextAnimation class="text-white" />
  </div>
  <div
    class="text-yellow-500 text-center border-x-orange-600 border-y-black border-5 star2"
  >
    <h1 class="p-5 text-5xl ">PROGRAMMING PRO TIP</h1>
    <p class="pb-5 text-3xl">
      code javascript underwater,
      <br />
      so nobody could see you crying
    </p>
  </div>
  <div class="star2 flex-auto justify-center">

    <img
      src="../assets/images/object1.gif"
      alt=""
      class="w-52"
      style="animation: MyMove 5s infinite; position: relative;"
    />
  </div>
</template>

<script>
import Background from "../components/Background.vue";
import TextAnimation from "../components/TextAnimation.vue";
export default {
  name: "HomeView",
  components: {
    Background,
    TextAnimation,
  },
};
</script>

<style>
.containerDiv {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height full screen */
  height: 30vh;
}

.border-5 {
  border-width: 5px;
  border-radius: 9px;
  width: fit-content;
  block-size: fit-content;
  /* border center */
  margin: auto;
}

@keyframes MyMove {
  0% {
    left: 30%;
  }
  25% {
    left: 35%;
  }
  50% {
    left: 40%;
  }
  75% {
    left: 35%;
  }
  100% {
    left: 30%;
  }
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
