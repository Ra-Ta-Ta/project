<template>
    <div
        class="relative bottom-0 left-1/2 w-1/2 h-full origin-bottom invisible book-style"
        ref="book"
    >
        <div class="absolute top-0 left-0 w-full h-full origin-bottom-left front-style" ref="front">
            <div
                class="absolute top-0 left-0 w-full h-full bg-100 bg-center bg-no-repeat cover-style"
            ></div>
            <div class="absolute top-0 left-0 w-full h-full bg-center bg-repeat bg-100 page-style">
                <ul
                    class="absolute top-0 right-0 h-3/4 flex origin-top byobu-style"
                    ref="byobuLeft"
                >
                    <li
                        v-for="byobu in byobus.num"
                        :key="`byobu${byobu}`"
                        class="relative flex-1 overflow-hidden byobu-left-style"
                    >
                        <img
                            src="~assets/images/component/byobu.jpg"
                            class="absolute top-0 h-full max-w-none byobu-bg-style"
                            :style="setByobuSize(-byobu + 1)"
                        />
                    </li>
                </ul>
                <div
                    class="absolute right-0 w-8/12 h-4/12 origin-bottom overflow-hidden sanpo-style"
                    ref="sanpoLeft"
                >
                    <img
                        src="~assets/images/component/sanpo.png"
                        class="absolute top-0 left-1/2 w-full h-full"
                    />
                </div>
                <img
                    src="~assets/images/component/doll-left.png"
                    class="absolute top-0 left-1/2 w-4/12 h-5/12 origin-bottom doll-left-style"
                    ref="dollLeft"
                />
                <img
                    src="~assets/images/component/bonbori.png"
                    class="absolute w-3/12 h-6/12 origin-bottom bonbori-left-style"
                    ref="bonboriLeft"
                />
            </div>
        </div>
        <div class="absolute top-0 left-0 w-full h-full back-style">
            <div class="absolute top-0 left-0 w-full h-full bg-center bg-repeat bg-100 page-style">
                <ul
                    class="absolute top-0 right-0 h-3/4 flex origin-top byobu-style"
                    ref="byobuRight"
                >
                    <li
                        v-for="byobu in byobus.num"
                        :key="`byobu${byobu}`"
                        class="relative flex-1 overflow-hidden byobu-right-style"
                    >
                        <img
                            src="~assets/images/component/byobu.jpg"
                            class="absolute top-0 h-full max-w-none byobu-bg-style"
                            :style="setByobuSize(-byobu - 2)"
                        />
                    </li>
                </ul>
                <div
                    class="absolute left-0 w-8/12 h-4/12 origin-bottom overflow-hidden sanpo-style"
                    ref="sanpoRight"
                >
                    <img
                        src="~assets/images/component/sanpo.png"
                        class="absolute top-0 right-1/2 w-full h-full"
                    />
                </div>
                <img
                    src="~assets/images/component/doll-right.png"
                    class="absolute top-0 right-1/2 w-4/12 h-5/12 origin-bottom doll-right-style"
                    ref="dollRight"
                />
                <img
                    src="~assets/images/component/bonbori.png"
                    class="absolute w-3/12 h-6/12 origin-bottom bonbori-right-style"
                    ref="bonboriRight"
                />
            </div>
            <div
                class="absolute top-0 left-0 w-full h-full bg-100 bg-center bg-no-repeat cover-style"
            ></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            card: {
                width: 0,
                height: 0,
            },
            byobus: { num: 3 },
        }
    },
    beforeMount() {
        const vm = this
        window.addEventListener("resize", () => {
            vm.getCardSize()
        })
        vm.getCardSize()
    },
    mounted() {
        window.addEventListener("load", () => {
            const vm = this
            const {
                book,
                front,
                byobuLeft,
                byobuRight,
                sanpoLeft,
                sanpoRight,
                dollLeft,
                dollRight,
                bonboriLeft,
                bonboriRight,
            } = vm.$refs
            const tl = gsap.timeline({ defaults: { duration: 0.7 } })
            const startWidth = vm.card.width * -3
            tl.fromTo(
                book,
                {
                    transform: `rotateX(-20deg) rotateY(-75deg) rotateZ(0deg) translateX(${startWidth}px)`,
                },
                {
                    duration: 0.3,
                    transform: `rotateX(-20deg) rotateY(-50deg) rotateZ(-15deg) translateX(${
                        startWidth / 3
                    }px)`,
                    visibility: "visible",
                    delay: 1,
                }
            )
                .to(book, {
                    keyframes: [
                        {
                            transform: `rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateX(0)`,
                        },
                        {
                            duration: 0.3,
                            rotateX: 60,
                        },
                    ],
                })
                .to(front, { rotateY: -180 })
                .to(
                    [
                        sanpoLeft,
                        sanpoRight,
                        dollLeft,
                        dollRight,
                        bonboriLeft,
                        bonboriRight,
                    ],
                    {
                        rotateX: -60,
                        delay: 0.2,
                    },
                    "<"
                )
                .to(
                    byobuRight,
                    {
                        y: "7vw",
                        z: "1vw",
                        rotateX: 120,
                    },
                    "<"
                )
                .to(
                    byobuLeft,
                    {
                        y: "7vw",
                        z: "1vw",
                        rotateX: 120,
                        delay: 0.1,
                    },
                    "<"
                )
        })
    },
    beforeDestroyed() {
        const vm = this
        window.removeEventListener("resize", vm.getCardSize())
    },
    computed: {
        setByobuSize() {
            const vm = this
            return (byobu) => {
                return {
                    left: `${(byobu / 6) * vm.card.width}px`,
                }
            }
        },
    },
    methods: {
        getCardSize() {
            const vm = this
            vm.$nextTick(() => {
                const card = vm.$parent.$el
                vm.card.width = card.offsetWidth - 32
                vm.card.height = card.offsetHeight - 32
            })
        },
    },
}
</script>
<style lang="scss" scoped>
.book-style,
.front-style,
.back-style,
.page-style,
.byobu-style {
    transform-style: preserve-3d;
}
.book-style {
    .cover-style {
        background-image: url("~assets/images/component/cover.jpg");
    }
    .page-style {
        background-image: url("~assets/images/component/tatami.jpg");
        // outline: 1.5vw solid rgba(65, 87, 45, 0.7);
        // outline-offset: -1.5vw;
    }
}
.front-style {
    .cover-style {
        transform: translateZ(3px);
    }
    .page-style {
        transform: rotateY(180deg);
        box-shadow: inset 2vw -2vw 3vw 0vw rgba(0, 0, 0, 0.5);
    }
}
.back-style {
    .cover-style {
        transform: translateZ(-3px);
    }
    .page-style {
        box-shadow: inset -2vw -2vw 3vw 0vw rgba(0, 0, 0, 0.5);
    }
}

.byobu-style {
    width: calc(100% - 0vw);
    .byobu-left-style,
    .byobu-right-style:nth-child(2) {
        transform: skewY(10deg);
    }
    .byobu-right-style,
    .byobu-left-style:nth-child(2) {
        transform: skewY(-10deg);
    }
    .byobu-bg-style {
        width: 600%;
    }
}
.sanpo-style {
    top: 50%;
}
// .doll-left-style {
//     left: 25%;
// }
// .doll-right-style {
//     right: 25%;
// }
.bonbori-left-style {
    left: 10%;
}
.bonbori-right-style {
    right: 10%;
}
</style>
