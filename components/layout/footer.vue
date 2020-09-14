<template>
  <div class="bg-oliveGreen w-full p-4 rounded-xl">
    <div
      class="w-full m-auto flex flex-col md:flex-row justify-center items-center"
    >
      <div class="flex flex-no-wrap md:mr-4 mb-1 ">
        <span class="text-khaki font-bold whitespace-no-wrap"
          >Tian Shang Tou E-News｜</span
        ><span class="text-oldLace font-bold whitespace-no-wrap"
          >電子報訂閱</span
        >
      </div>
      <div class="flex justify-center">
        <input
          type="email"
          name="subscribe"
          placeholder="Enter your email"
          class="w-46 md:w-64 custom-style bg-oldLace text-darkBrown font-bold placeholder-tan rounded-lg pl-2 mr-2"
        />
        <button
          class="bg-Peach rounded-lg text-darkBrown text-lg font-bold whitespace-no-wrap flex justify-center items-center px-4 py-1 "
        >
          訂閱
        </button>
      </div>
    </div>
    <hr class="mt-3 mb-2 border-dotted" />
    <div class="w-full flex flex-col md:flex-row justify-center items-center">
      <p class="text-oldLace font-sm font-bold whitespace-no-wrap">
        甜上頭企業有限公司
      </p>
      <p class="hidden md:inline text-khaki font-sm font-bold">｜</p>
      <p class="text-oldLace font-sm font-bold flex flex-wrap">
        <span class="whitespace-no-wrap">Tian Shang Tou .&nbsp;</span
        ><span class="whitespace-no-wrap">© All Rights Reserved</span>
      </p>
      <p class="hidden md:inline text-khaki font-sm font-bold">｜</p>
      <p class="text-oldLace font-sm font-bold flex flex-wrap">
        <span class="whitespace-no-wrap">客服信箱&nbsp;</span
        ><span class="whitespace-no-wrap">info@tianshangtou.com</span>
      </p>
      <p class="hidden md:inline text-khaki font-sm font-bold">｜</p>
      <p class="text-oldLace font-sm font-bold flex flex-wrap">
        <span class="whitespace-no-wrap">客服電話&nbsp;</span
        ><span class="whitespace-no-wrap">07-123-4567</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped></style>
