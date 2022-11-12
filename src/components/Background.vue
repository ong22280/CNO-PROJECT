<template>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/Gsc0HtG6rTc?&autoplay=1&mute=1&playsinline=1&playlist=Gsc0HtG6rTc&loop=1"></iframe>
    </div>
    <!-- <div id="text">
        <h1>Use a youtube video as a full screen background with CSS</h1>
    </div> -->
</template>

<script>
export default {

}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");


.video-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -100;
}

iframe {
    position: relative;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    pointer-events: none;
}

@media (min-aspect-ratio: 16/9) {
    .video-container iframe {
        height: 56.25vw;
    }
}

@media (max-aspect-ratio: 16/9) {
    .video-container iframe {
        width: 177.78vh;
    }
}

























/* DO NOT COPY. NOT PART OF THE EXAMPLE */
.read-article {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 999;
    color: #000;
    background: white;
    padding: 10px 20px;
    border-radius: 10px;
    font-family: arial;
    text-decoration: none;
    box-shadow: rgb(50 50 93 / 25%) 0 0 100px -20px, rgb(0 0 0 / 30%) 0 0 60px -15px;
}

.read-article:hover {
    background: #d5d5d5;
    box-shadow: rgb(50 50 93 / 25%) 0 0 100px -20px, rgb(0 0 0 / 30%) 0 0 60px 0px;
}

iframe[sandbox] .read-article {
    display: none;
}
</style>