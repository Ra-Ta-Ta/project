<template>
    <div
        v-if="loading"
        class="fixed inset-0 w-full h-full text-center text-xl loading-style"
    >
        <div class="preloader-style">
            <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="888.000000pt"
                height="1518.000000pt"
                viewBox="0 0 888.000000 1518.000000"
                preserveAspectRatio="xMidYMid meet"
                v-for="(item, index) in 5"
                :key="index"
            >
                <path
                    transform="translate(0.000000,1518.000000) scale(0.100000,-0.100000)"
                    d="M1635 15125 c-331 -72 -689 -373 -855 -720 -87 -182 -123 -354 -123
-590 -1 -244 33 -452 115 -705 81 -249 151 -383 317 -603 59 -79 115 -163 125
-188 26 -62 23 -174 -8 -399 -75 -528 -58 -741 114 -1490 33 -140 73 -322 89
-405 69 -346 65 -570 -16 -765 -66 -160 -125 -236 -447 -576 -309 -328 -436
-531 -511 -819 -38 -147 -50 -256 -49 -450 2 -337 78 -683 213 -970 87 -186
186 -317 415 -554 220 -229 275 -307 326 -466 34 -107 39 -306 10 -445 -54
-267 -175 -526 -358 -770 -31 -41 -176 -194 -322 -340 -265 -264 -335 -346
-425 -493 -97 -160 -176 -382 -220 -624 -24 -130 -25 -149 -25 -559 0 -454 4
-512 55 -737 102 -449 302 -820 567 -1048 201 -173 473 -301 768 -361 100 -20
144 -23 340 -23 195 0 240 3 339 23 158 32 304 78 611 192 283 105 431 153
520 170 86 16 297 38 505 52 245 16 1189 16 1430 0 494 -33 554 -46 1041 -227
293 -110 438 -155 595 -187 100 -20 143 -23 344 -23 211 1 240 3 356 28 535
114 907 405 1139 890 317 663 341 1689 55 2304 -95 204 -215 355 -496 624
-105 101 -226 225 -267 274 -183 218 -322 483 -394 754 -28 106 -31 130 -32
276 -2 299 49 402 357 723 173 179 241 261 312 370 103 160 206 423 255 647
104 482 69 895 -103 1237 -93 185 -196 317 -464 599 -231 242 -305 337 -369
472 -60 128 -77 211 -77 387 -1 211 10 278 147 882 161 709 174 898 100 1433
-30 219 -30 356 0 415 10 19 58 87 106 150 153 202 204 290 283 490 159 405
205 848 122 1186 -65 270 -222 513 -451 703 -322 267 -651 338 -949 207 -96
-43 -239 -146 -405 -291 -86 -75 -179 -147 -208 -162 -79 -39 -165 -30 -407
42 -821 244 -1288 287 -1915 175 -165 -30 -358 -78 -659 -164 -379 -109 -405
-107 -592 58 -303 267 -417 341 -598 387 -87 22 -235 24 -326 4z"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        loading: false,
    }),
    methods: {
        start() {
            const vm = this;
            vm.loading = true;
        },
        finish() {
            const vm = this;
            vm.loading = false;
        },
    },
};
</script>

<style lang="scss" scoped>
$colors: (
    1: rgba(120, 89, 43, 1),
    2: rgba(227, 208, 169, 1),
    3: rgba(88, 130, 128, 1),
    4: rgba(218, 175, 70, 1),
    5: rgba(179, 92, 47, 1),
);
.loading-style {
    background: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}
.preloader-style {
    width: 60vw;
    height: 12vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    perspective: 2000px;
    perspective-origin: 50% 50%;
}
.preloader-style svg {
    position: absolute;
    width: 20%;
    height: 100%;
    left: 0%;
    box-sizing: border-box;
    transform-origin: 0% 50%;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

$left: 0;
@for $i from 1 through 5 {
    .preloader-style svg:nth-child(#{$i}) {
        left: percentage($left / 100);
        fill: map-get($colors, $i);
        animation-name: flipPreloader + $i;
        z-index: $i;
    }

    $left: $left + 20;
}

@keyframes flipPreloader1 {
    0% {
        transform: rotateY(-180deg);
        opacity: 0;
        transform-origin: 0% 50%;
        fill: map-get($colors, 1);
    }
    4% {
        fill: map-get($colors, 1);
    }
    5% {
        fill: map-get($colors, 5);
    }
    10% {
        transform: rotateY(0deg);
        opacity: 1;
        fill: map-get($colors, 5);
        transform-origin: 0% 50%;
    }
    11% {
        transform-origin: 100% 50%;
        fill: map-get($colors, 1);
    }
    48% {
        z-index: 1;
    }
    49% {
        z-index: 10;
    }
    50% {
        transform: rotateY(0deg);
    }
    51% {
        transform-origin: 100% 50%;
    }
    60% {
        transform: rotateY(180deg);
        opacity: 1;
        fill: map-get($colors, 1);
    }
    61% {
        opacity: 0;
    }
    100% {
        z-index: 10;
        transform: rotateY(180deg);
        opacity: 0;
        transform-origin: 100% 50%;
        fill: map-get($colors, 1);
    }
}

@keyframes flipPreloader2 {
    0% {
        transform: rotateY(-180deg);
        fill: map-get($colors, 5);
        opacity: 0;
        transform-origin: 0% 50%;
    }
    9% {
        opacity: 0;
    }
    10% {
        transform: rotateY(-180deg);
        opacity: 1;
    }
    15% {
        fill: map-get($colors, 5);
    }
    20% {
        fill: map-get($colors, 5);
        transform: rotateY(0deg);
        transform-origin: 0% 50%;
    }
    21% {
        transform-origin: 100% 50%;
        fill: map-get($colors, 2);
    }
    48% {
        z-index: 2;
    }
    49% {
        z-index: 9;
    }
    60% {
        opacity: 1;
        transform: rotateY(0deg);
        fill: map-get($colors, 2);
    }
    61% {
        fill: map-get($colors, 1);
        transform-origin: 100% 50%;
    }
    64% {
        fill: map-get($colors, 1);
    }
    65% {
        fill: map-get($colors, 2);
    }
    70% {
        transform: rotateY(180deg);
        opacity: 1;
    }
    71% {
        opacity: 0;
    }
    100% {
        z-index: 9;
        fill: map-get($colors, 2);
        transform: rotateY(180deg);
        opacity: 0;
        transform-origin: 100% 50%;
    }
}

@keyframes flipPreloader3 {
    0% {
        transform: rotateY(-180deg);
        fill: map-get($colors, 5);
        opacity: 0;
        transform-origin: 0% 50%;
    }
    19% {
        opacity: 0;
    }
    20% {
        transform: rotateY(-180deg);
        opacity: 1;
    }
    25% {
        fill: map-get($colors, 5);
    }
    30% {
        fill: map-get($colors, 5);
        transform: rotateY(0deg);
        transform-origin: 0% 50%;
    }
    31% {
        transform-origin: 100% 50%;
        fill: map-get($colors, 3);
    }
    48% {
        z-index: 3;
    }
    49% {
        z-index: 8;
    }
    70% {
        transform: rotateY(0deg);
        opactiy: 1;
        fill: map-get($colors, 3);
    }
    71% {
        fill: map-get($colors, 2);
        transform-origin: 100% 50%;
    }
    74% {
        fill: map-get($colors, 2);
    }
    75% {
        fill: map-get($colors, 3);
    }
    80% {
        transform: rotateY(180deg);
        opacity: 1;
    }
    81% {
        opacity: 0;
    }
    100% {
        z-index: 8;
        fill: map-get($colors, 3);
        transform: rotateY(180deg);
        opacity: 0;
        transform-origin: 100% 50%;
    }
}

@keyframes flipPreloader4 {
    0% {
        transform: rotateY(-180deg);
        fill: map-get($colors, 5);
        opacity: 0;
        transform-origin: 0% 50%;
    }
    29% {
        opacity: 0;
    }
    30% {
        transform: rotateY(-180deg);
        opacity: 1;
    }
    35% {
        fill: map-get($colors, 5);
    }
    40% {
        fill: map-get($colors, 5);
        transform: rotateY(0deg);
        transform-origin: 0% 50%;
    }
    41% {
        transform-origin: 100% 50%;
        fill: map-get($colors, 4);
    }
    48% {
        z-index: 4;
    }
    49% {
        z-index: 7;
    }
    80% {
        transform: rotateY(0deg);
        opacity: 1;
        fill: map-get($colors, 4);
    }
    81% {
        fill: map-get($colors, 3);
        transform-origin: 100% 50%;
    }
    84% {
        fill: map-get($colors, 3);
    }
    85% {
        fill: map-get($colors, 4);
    }
    90% {
        transform: rotateY(180deg);
        opacity: 1;
    }
    91% {
        opacity: 0;
    }
    100% {
        z-index: 7;
        fill: map-get($colors, 4);
        transform: rotateY(180deg);
        opacity: 0;
        transform-origin: 100% 50%;
    }
}

@keyframes flipPreloader5 {
    0% {
        transform: rotateY(-180deg);
        fill: map-get($colors, 5);
        opacity: 0;
        transform-origin: 0% 50%;
    }
    39% {
        opacity: 0;
    }
    40% {
        transform: rotateY(-180deg);
        opacity: 1;
    }
    45% {
        fill: map-get($colors, 5);
    }
    48% {
        z-index: 5;
    }
    49% {
        z-index: 6;
    }
    50% {
        fill: map-get($colors, 5);
        transform: rotateY(0deg);
        transform-origin: 0% 50%;
    }
    51% {
        transform-origin: 100% 50%;
        fill: map-get($colors, 5);
    }
    90% {
        transform: rotateY(0deg);
        opacity: 1;
        fill: map-get($colors, 5);
    }
    91% {
        fill: map-get($colors, 4);
        transform-origin: 100% 50%;
    }
    94% {
        fill: map-get($colors, 4);
    }
    95% {
        fill: map-get($colors, 5);
    }
    100% {
        z-index: 6;
        fill: map-get($colors, 5);
        transform: rotateY(180deg);
        opacity: 0;
        transform-origin: 100% 50%;
    }
}
</style>
