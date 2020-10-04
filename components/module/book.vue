<template>
  <div
    class="relative bottom-0 left-1/2 w-1/2 h-full origin-bottom invisible book-style"
    ref="book"
  >
    <div
      class="absolute top-0 left-0 w-full h-full origin-bottom-left front-style"
      ref="front"
    >
      <div
        class="absolute top-0 left-0 w-full h-full bg-100 bg-center bg-no-repeat cover-style"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-100 page-style"
      >
        <ul
          class="absolute top-0 right-0 w-full h-3/4 flex origin-top byobu-style"
          ref="byobuLeft"
        >
          <li
            v-for="byobu in byobus.num"
            :key="`byobu${byobu}`"
            class="relative flex-1 overflow-hidden byobu-left-style"
          >
            <div
              class="absolute top-0 h-full bg-bottom bg-no-repeat bg-100 byobu-bg-style"
              :style="setByobuSize(-byobu + 1)"
            ></div>
          </li>
        </ul>
        <div
          class="absolute right-0 w-9/12 h-3/12 origin-bottom overflow-hidden table-style"
          ref="tableLeft"
        >
          <div
            class="absolute top-0 left-1/2 w-full h-full bg-center bg-no-repeat bg-100 table-bg-style"
          ></div>
        </div>
        <div
          class="absolute top-1/2 w-1/2 h-6/12 origin-bottom bg-center bg-no-repeat bg-100 rounded-full girl-left-style"
        ></div>
        <div
          class="absolute top-1/2 w-1/2 h-1/12 origin-bottom bg-center bg-no-repeat bg-100 zabuton-left-style"
          ref="zabutonLeft"
        ></div>
      </div>
    </div>
    <div class="absolute top-0 left-0 w-full h-full back-style">
      <div
        class="absolute top-0 left-0 w-full h-full bg-center bg-no-repeat bg-100 page-style"
      >
        <ul
          class="absolute top-0 left-0 w-full h-3/4 flex origin-top byobu-style"
          ref="byobuRight"
        >
          <li
            v-for="byobu in byobus.num"
            :key="`byobu${byobu}`"
            class="relative flex-1 overflow-hidden byobu-right-style"
          >
            <div
              class="absolute top-0 h-full bg-bottom bg-no-repeat bg-100 byobu-bg-style"
              :style="setByobuSize(-byobu - 2)"
            ></div>
          </li>
        </ul>
        <div
          class="absolute left-0 w-9/12 h-3/12 origin-bottom overflow-hidden table-style"
          ref="tableRight"
        >
          <div
            class="absolute top-0 right-1/2 w-full h-full bg-center bg-no-repeat bg-100 table-bg-style"
          ></div>
        </div>
        <div
          class="absolute top-1/2 w-1/2 h-6/12 origin-bottom bg-center bg-no-repeat bg-100 rounded-full girl-right-style"
        ></div>
        <div
          class="absolute top-1/2 w-1/2 h-1/12 origin-bottom bg-center bg-no-repeat bg-100 zabuton-right-style"
          ref="zabutonRight"
        ></div>
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
      byobus: {
        num: 3,
      },
    };
  },
  beforeMount() {
    const vm = this;
    window.addEventListener("resize", () => {
      vm.getCardSize();
    });
    vm.getCardSize();
  },
  mounted() {
    window.addEventListener("load", () => {
      const vm = this;
      const {
        book,
        front,
        byobuLeft,
        byobuRight,
        tableLeft,
        tableRight,
        zabutonLeft,
        zabutonRight,
      } = vm.$refs;
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      const startWidth = `${vm.card.width * -3}px`;
      tl.fromTo(
        book,
        {
          transform: `rotateX(-15deg) rotateY(-80deg) translateX(${startWidth})`,
        },
        {
          transform: `rotateX(35deg) rotateY(0deg) translateX(0)`,
          visibility: "visible",
        }
      )
        .to(book, {
          rotationX: 60,
        })
        .to(front, { rotationY: -180 }, "<")

        .to(
          [tableLeft, tableRight, zabutonLeft, zabutonRight],
          {
            rotationX: -60,
          },
          "<"
        )
        .to(
          byobuRight,
          {
            delay: 0.2,
            y: "7vw",
            z: "1vw",
            rotationX: 120,
          },
          "<"
        )
        .to(
          byobuLeft,
          {
            delay: 0.2,
            y: "7vw",
            z: "1vw",
            rotationX: 120,
          },
          "<"
        );
    });
  },
  beforeDestroyed() {
    const vm = this;
    window.removeEventListener("resize", vm.getCardSize());
  },
  computed: {
    setByobuSize() {
      const vm = this;
      return (byobu) => {
        return {
          left: `${(byobu / 6) * vm.card.width}px`,
        };
      };
    },
  },
  methods: {
    getCardSize() {
      const vm = this;
      vm.$nextTick(() => {
        const card = vm.$parent.$el;
        vm.card.width = card.offsetWidth - 32;
        vm.card.height = card.offsetHeight - 32;
      });
    },
  },
};
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
  // transform: rotateX(60deg);
  .cover-style {
    background-color: rgba(191, 145, 75, 0.7);
    background-image: url("../../assets/images/component/cover.jpg");
  }
  .page-style {
    background-color: rgba(191, 145, 75, 0.7);
    background-image: url("../../assets/images/component/tatami.jpg");
    outline: 8px solid rgba(65, 87, 45, 0.7);
    outline-offset: -8px;
  }
}
.front-style {
  // transform: rotateY(-0deg);
  .cover-style {
    transform: translateZ(3px);
  }
  .page-style {
    transform: rotateY(180deg);
  }
}
.back-style {
  .cover-style {
    transform: translateZ(-3px);
  }
}

.byobu-style {
  .byobu-left-style {
    transform: skewY(-10deg);
    &:nth-child(2) {
      transform: skewY(10deg);
    }
  }
  .byobu-right-style {
    transform: skewY(10deg);
    &:nth-child(2) {
      transform: skewY(-10deg);
    }
  }
  .byobu-bg-style {
    background-image: url("../../assets/images/component/byobu.jpg");
    width: 600%;
  }
}
.table-style {
  top: 35%;
  .table-bg-style {
    background-image: url("../../assets/images/component/table.png");
  }
}
.zabuton-left-style {
  background-image: url("../../assets/images/component/zabuton-left.png");
  left: 15%;
}
.zabuton-right-style {
  background-image: url("../../assets/images/component/zabuton-right.png");
  right: 15%;
}
.girl-left-style {
  background-image: url("../../assets/images/component/girl-left.jpg");
  left: 15%;
}
.girl-right-style {
  background-image: url("../../assets/images/component/girl-right.jpg");
  right: 15%;
}
</style>
