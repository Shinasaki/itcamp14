<template>
    <div class="app-highlight">
        <div class="space e1">
            <p class="gradient-text hover-underline-animation">Gradient text</p>
            <div class="triangle "></div> <br>
            <p class="hover-underline-animation">Hover this text to see the effect!</p>
        </div>
        <div class="space e2">
            <p class="gradient-text hover-underline-animation">Gradient text2</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Highlight'
}
</script>

<style lang="scss" >
    .e1 {
        z-index: 1;
        position: relative;
        height: 500px;
        background-image: url('../../assets/images/section1.jpg');
        background-size: 100% 100%;
        // min-height: 100vh;
    }
    .e1::after {
        content: '';
        // background-image: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxLjQxNCI+PHBhdGggZD0iTTEyIDEybDEyIDEySDBsMTItMTJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+);
        background-image: url(../../assets/images/svg/bg.svg);
        background-size: cover;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }
    .e2 {
        margin-top: -20vh;
        background: rgb(255, 231, 94);
        z-index: 0;
    }
    .gradient-text {
        font-size: 100px;
        font-weight: bold;
        background-image: url('../../assets/images/section1.jpg');
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .triangle {
        width: 0;
        height: 0;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-right: 20px solid #333;
    }
    .hover-underline-animation {
        display: inline-block;
        position: relative;
        color: #ccc;
    }
    :root {
        --ease-in-out-circ: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
    .hover-underline-animation::after {
        font-size: 10px;
        content: '';
        position: absolute;
        width: 103%;
        transform: scaleX(0);
        // height: 24px;
        top: 0;
        bottom: 0;
        left: -3px;
        background-color: rgb(255, 231, 94);
        /* transform-origin: top right; */
        transition: transform 0.3s var(--ease-in-out-circ);
        z-index: -1;
    }
    .hover-underline-animation::after {
        /* transform: scaleX(1); */
        /* transform-origin: top left; */
        animation: bgslider 1.2s ease-in-out;
    }
    @keyframes bgslider {
        0% { transform: scaleX(0); transform-origin: top left; }
        54% { transform: scaleX(1); transform-origin: top left; }
        55% { transform: scaleX(1); transform-origin: top right; }
        100% { transform: scaleX(0); transform-origin: top right; }
    }
</style>
