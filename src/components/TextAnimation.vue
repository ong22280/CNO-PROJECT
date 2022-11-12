<template>
    <div >
        <img width="1000"  class="star " src="../assets/images/CNO-removebg-preview.png" alt="" style="max-width:100%; height:auto">
    </div>
</template>

<script>

export default {

}
</script>

<style>

.star {
    animation: star 20s ;
}

@keyframes star {
    0% {
        opacity: 0;
        /* center */
        transform: scale(0) ;
    }
    1% {
        opacity: 0;
        transform: scale(0.1) ;
    }
    20% {
        opacity: 1;
        transform: scale(0.7) ;
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>