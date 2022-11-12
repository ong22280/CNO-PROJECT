<template>
    <Navbar />
    <div>
        <Background />
        <RouterView />
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Background from './components/Background.vue'
export default {
    name: 'App',
    components: {
        Navbar,
        Background,
    },
}
</script>

<style>



</style>