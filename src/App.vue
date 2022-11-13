<template>
  <Navbar />
  <div class="fixed left-[-225px] bottom-[30px] max-h-[300px] star5">
    <img
      src="./assets/images/rocket-use.png"
      alt=""
      class="animate-wiggle"
    />
  </div>
  <div class="fixed right-[50px] bottom-[30px] max-h-[300px] star5">
    <img
      src="./assets/images/planet.png"
      alt=""
      class="h-[100px] animate-wiggle"
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

.zoom-in-out-infinite {
  animation: zoom-in-out-infinite 2s infinite;
}
@keyframes zoom-in-out-infinite {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
}

</style>
