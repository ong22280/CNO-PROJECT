<template>
    <div id="textA">
        <img class="star" src="../assets/images/CNO-removebg-preview.png" alt="">
    </div>
</template>

<script>

export default {

}
</script>

<style>

textA {
    position: relative;
    color: #FFFFFF;


}

.star {
    animation: star 20s ;
}

@keyframes star {
    0% {
        opacity: 1;
        /* center */
        transform: scale(0.7) ;
    }


    100% {
        opacity: 1;
        transform: scale(1);
    }
}
</style>