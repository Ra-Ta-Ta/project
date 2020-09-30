<template>
  <div
    class="relative bottom-0 left-1/2 w-1/2 h-full  origin-bottom book-style"
    ref="book"
  >
    <div
      class="absolute top-0 left-0 w-full h-full   origin-bottom-left front-style"
      ref="front"
    >
      <div
        class="absolute top-0 left-0 w-full h-full  bg-100 bg-center bg-no-repeat cover-style"
      ></div>
      <div
        class="absolute top-0 left-0 w-full h-full  bg-center bg-no-repeat bg-100 page-style"
      >
        <ul
          class="absolute right-0 w-full h-3/4 flex origin-bottom byobu-style"
          :style="{ top: `calc(${byobus.height} + 4vw)` }"
          ref="byobu"
        >
          <li
            v-for="byobu in byobus.num"
            :key="`byobu${byobu}`"
            class="relative flex-1 overflow-hidden byobu-left-style"
          >
            <div
              class="absolute top-0 h-full bg-bottom bg-no-repeat bg-100 byobu-bg-style"
              :style="setByobuData(-byobu + 1)"
            ></div>
          </li>
        </ul>
        <div
          class="absolute right-0 w-9/12 h-3/12 origin-bottom overflow-hidden table-style"
          ref="table"
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
          ref="zabuton-left"
        ></div>
      </div>
    </div>
    <div class="absolute top-0 left-0 w-full h-full back-style">
      <div
        class="absolute top-0 left-0 w-full h-full  bg-center bg-no-repeat bg-100 page-style"
      >
        <ul
          class="absolute w-full h-3/4 flex origin-bottom byobu-style"
          :style="{ top: `calc(${byobus.height} + 4vw)` }"
          ref="byobu"
        >
          <li
            v-for="byobu in byobus.num"
            :key="`byobu${byobu}`"
            class="relative flex-1 overflow-hidden byobu-right-style"
          >
            <div
              class="absolute top-0 h-full bg-bottom bg-no-repeat bg-100 byobu-bg-style"
              :style="setByobuData(-byobu - 2)"
            ></div>
          </li>
        </ul>
        <div
          class="absolute left-0 w-9/12 h-3/12 origin-bottom overflow-hidden table-style"
          ref="table"
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
          ref="zabuton-right"
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
      byobus: {
        num: 3,
        width: 0,
        height: 0,
        shadow: ""
      }
    };
  },
  beforeMount() {
    const vm = this;
    window.addEventListener("resize", () => {
      vm.getByobuData();
    });
    vm.getByobuData();
  },
  beforeDestroyed() {
    const vm = this;
    window.removeEventListener("resize", vm.getByobuData());
  },
  computed: {
    setByobuData() {
      const vm = this;
      return byobu => {
        return {
          width: `${vm.byobus.width}px`,
          left: `${(byobu / 6) * vm.byobus.width}px`
        };
      };
    }
  },
  methods: {
    getByobuData() {
      const vm = this;
      vm.$nextTick(() => {
        const { byobu } = vm.$refs;
        vm.byobus.width = byobu.offsetWidth * 2;
        vm.byobus.height = -byobu.offsetHeight * 0.85 + "px";
      });
    }
  }
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
  transform: rotateX(60deg);
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
  transform: rotateY(-0deg);
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
  // transform: rotateX(-60deg) translateY(-1.5vw);
  transform: rotateX(-0deg) translateY(-0vw);
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
  }
}
.table-style {
  top: 35%;
  transform: rotateX(-0deg);
  .table-bg-style {
    background-image: url("../../assets/images/component/table.png");
  }
}
.zabuton-left-style {
  background-image: url("../../assets/images/component/zabuton-left.png");
  left: 15%;
  transform: rotateX(-0deg);
}
.zabuton-right-style {
  background-image: url("../../assets/images/component/zabuton-right.png");
  right: 15%;
  transform: rotateX(-0deg);
}
.girl-left-style {
  background-image: url("../../assets/images/component/girl-left.jpg");
  left: 15%;
  transform: rotateX(-0deg);
}
.girl-right-style {
  background-image: url("../../assets/images/component/girl-right.jpg");
  right: 15%;
  transform: rotateX(-0deg);
}
</style>
