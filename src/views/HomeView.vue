<template>
  <div class="containerDiv">
    <TextAnimation class="text-white" />
  </div>
  <div
    class="text-yellow-500 text-center border-x-orange-600 border-y-black border-5 star2"
  >
    <h1 class="p-5 text-5xl">PROGRAMMING PRO TIP</h1>
    <p class="pb-5 text-3xl">
      code javascript underwater,
      <br />
      so nobody could see you crying
    </p>
  </div>
  <img
    src="../assets/images/object1.gif"
    alt=""
    class="w-52"
    style="animation: MyMove 5s infinite; position: relative;"
  />
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

.star2 {
  animation: star2 8s;
}

@keyframes star2 {
  0% {
    opacity: 0;
    /* center */
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.star3 {
  animation: star3 8s;
}

@keyframes star3 {
  0% {
    opacity: 0;
    /* center */
  }

  80% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes MyMove {
  0% {
    left: 0%;
  }
  25% {
    left: 15%;
  }
  50% {
    left: 30%;
  }
  75% {
    left: 15%;
  }
  100% {
    left: 0%;
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
