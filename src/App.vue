<template>
  <Navbar />
  <div class="fixed left-[-225px] bottom-[30px] max-h-[300px] star5">
    <img
      src="./assets/images/rocket-use.png"
      alt=""
      class="hover:animate-wiggle"
    />
  </div>
  <div class="fixed right-[50px] bottom-[30px] max-h-[300px] star5">
    <img
      src="./assets/images/planet.png"
      alt=""
      class="h-[100px] hover:animate-wiggle"
    />
  </div>
  <div>
    <Background />
    <RouterView />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Background from "./components/Background.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Background,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;600;700&display=swap');

.star {
  animation: star 20s;
}
@keyframes star {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  1% {
    opacity: 0;
    transform: scale(0.1);
  }
  20% {
    opacity: 1;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.star2 {
  animation: star2 8s;
}
@keyframes star2 {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.star3 {
  animation: star3 2s;
}
@keyframes star3 {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.star4 {
  animation: star4 3s;
}
@keyframes star4 {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  80% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.star5 {
  animation: star5 8s;
}
@keyframes star5 {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  80% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
