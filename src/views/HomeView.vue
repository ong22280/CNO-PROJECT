<template>
    <div class="containerDiv">
        <TextAnimation class="text-white"/>
    </div>
    <div>

    </div>
</template>

<script>
import Background from '../components/Background.vue'
import TextAnimation from '../components/TextAnimation.vue'
export default {
    name: 'HomeView',
    components: {
        Background,
        TextAnimation,
    },
}
</script>

<style>
.containerDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height full screen */
    height: 30vh;
}
</style>