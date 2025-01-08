<template>
    <div class="flex justify-center w-full px-36 ">
        <div class="text-white flex justify-between">
            <!-- 第一个卡片 -->
            <div class="basis-1/3 border-gray-300 border-y-2 border-l-[2px] px-[32px] py-[56px]">
                <!-- 添加 flex container 包裹图标和标题 -->
                <div class="flex items-center gap-4 mb-4">
                    <!-- 增大图标尺寸 -->
                    <i class="fa-solid fa-laptop-code text-primary-500 text-5xl"></i>
                    <!-- 增大标题字体并右对齐 -->
                    <h3 class="text-2xl">
                        <span class="font-bold text-neutral-50">Fast</span>
                    </h3>
                </div>
                <p v-text="'<h2>'" class="pb-[10px] text-[#5c5b5e]"></p>
                <div class="border-[#5c5b5e] border-l-2 pl-4 ml-[20px]">
                    <p class="text-neutral-100">
                        Experienced in developing both front-end and back-end technologies. Python,
                        Ruby, JavaScript, TypeScript.
                    </p>
                </div>
                <p v-text="'<h2>'" class="pt-[10px] text-[#5c5b5e]"></p>

            </div>

            <!-- 第二个卡片 -->
            <div class="basis-1/3 border-gray-300 border-y-2 border-x-[2px] px-[32px] py-[56px]">
                <div class="flex items-center gap-4 mb-4">
                    <i class="fa-brands fa-react text-primary-500 text-5xl"></i>
                    <h3 class="text-2xl">
                        <span class="font-bold text-neutral-50">Responsive </span>

                    </h3>
                </div>
                <p v-text="'<h2>'" class="pb-[10px] text-[#5c5b5e]"></p>
                <div class="border-[#5c5b5e] border-l-2 pl-4 ml-[20px]">
                    <p class="text-neutral-100">
                        Experienced in developing both front-end and back-end technologies. Python,
                        Ruby, JavaScript, TypeScript.
                    </p>
                </div>
                <p v-text="'<h2>'" class="pt-[10px] text-[#5c5b5e]"></p>
            </div>

            <!-- 第三个卡片 -->
            <div class="basis-1/3 border-gray-300 border-y-2 border-r-[2px] px-[32px] py-[56px]">
                <div class="flex items-center gap-4 mb-4">
                    <i class="fa-solid fa-pen-ruler text-primary-500 text-5xl"></i>
                    <h3 class="text-2xl">
                        <span class="font-bold text-neutral-50">Intuitive </span>

                    </h3>
                </div>
                <p v-text="'<h2>'" class="pb-[10px] text-[#5c5b5e]"></p>
                <div class="border-[#5c5b5e] border-l-2 pl-4 ml-[20px]">
                    <p class="text-neutral-100">
                        Experienced in developing both front-end and back-end technologies. Python,
                        Ruby, JavaScript, TypeScript.
                    </p>
                </div>
                <p v-text="'<h2>'" class="pt-[10px] text-[#5c5b5e]"></p>
            </div>


        </div>
    </div>
</template>

<style scoped>
/* 引入 Font Awesome 图标库，用于显示各种图标 */
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css);
</style>