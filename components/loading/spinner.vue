<template>
    <ul class="cssload-bokeh">
        <li class="cssload-circle"></li>
        <li class="cssload-circle"></li>
        <li class="cssload-circle"></li>
        <li class="cssload-circle"></li>
    </ul>
</template>
<style lang="scss">
.cssload-bokeh {
    position: absolute;
    list-style: none;
    border-radius: 50%;
}

.cssload-circle {
    position: absolute;
    width: 20%;
    height: 20%;

    border-radius: 50%;
    &:nth-child(1) {
        left: 50%;
        top: 0;
        margin: 0 0 0 -0.1em;
        background: rgb(0, 193, 118);
        transform-origin: 50% 250%;
        animation: cssload-rota 1.3s linear infinite,
            cssload-opa 4.22s ease-in-out infinite alternate;
    }
    &:nth-child(2) {
        top: 50%;
        right: 0;
        margin: -0.1em 0 0 0;
        background: rgb(255, 0, 60);
        transform-origin: -150% 50%;
        animation: cssload-rota 2.14s linear infinite,
            cssload-opa 4.93s ease-in-out infinite alternate;
    }
    &:nth-child(3) {
        left: 50%;
        bottom: 0;
        margin: 0 0 0 -0.1em;
        background: rgb(250, 190, 40);
        transform-origin: 50% -150%;
        animation: cssload-rota 1.67s linear infinite,
            cssload-opa 5.89s ease-in-out infinite alternate;
    }
    &:nth-child(4) {
        top: 50%;
        left: 0;
        margin: -0.1em 0 0 0;
        background: rgb(136, 193, 0);
        transform-origin: 250% 50%;
        animation: cssload-rota 1.98s linear infinite,
            cssload-opa 6.04s ease-in-out infinite alternate;
    }
}

@keyframes cssload-rota {
    from {
    }
    to {
        transform: rotate(360deg);
    }
}

@keyframes cssload-opa {
    0% {
    }
    12.0% {
        opacity: 0.8;
    }
    19.5% {
        opacity: 0.88;
    }
    37.2% {
        opacity: 0.64;
    }
    40.5% {
        opacity: 0.52;
    }
    52.7% {
        opacity: 0.69;
    }
    60.2% {
        opacity: 0.6;
    }
    66.6% {
        opacity: 0.52;
    }
    70.0% {
        opacity: 0.63;
    }
    79.9% {
        opacity: 0.6;
    }
    84.2% {
        opacity: 0.75;
    }
    91.0% {
        opacity: 0.87;
    }
}
</style>
