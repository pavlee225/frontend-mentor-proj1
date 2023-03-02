<template>
    <div>
        <nav class="
                                    container
                                    px-1
                                    py-4
                                     mx-auto
                                    md:flex md:justify-between md:items-center
                                    ">
            <div class="flex items-center justify-between">
                <router-link to="/" class="
                                            text-xl
                                            font-bold
                                            md:text-2xl
                                          "><img src="@/assets/images/logo.svg" alt="logo" />
                </router-link>
                <!-- Mobile menu button -->
                <div @click="toggleNav" class="flex md:hidden">
                    <button type="button" class="
                                              focus:outline-none focus:text-gray-400
                                            ">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <ul :class="showMenu ? 'flex' : 'hidden'" class="
                                          flex-col
                                          mt-8
                                          lg:space-y-2
                                          md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
                                        ">
                <li class=" hover:text-orange-600"><a href="#">Home</a></li>
                <li class=" hover:text-orange-600"><a href="#">New</a></li>
                <li class=" hover:text-orange-600"><a href="#">Popular</a></li>
                <li class=" hover:text-orange-600"><a href="#">Trending</a></li>
                <li class=" hover:text-orange-600"><a href="#">Categories</a></li>
            </ul>
        </nav>
    </div>
    <!-- <div class="">
            <img src />
        </div> -->

    <!-- <div class="flex p-2">
            <ul>
                <li class="hover:text-orange-600"><a href="#"> Home </a></li>
                <li class="hover:text-orange-600"><a href="#"> New </a></li>
                <li class="hover:text-orange-600"> <a href="#">Popular </a></li>
                <li class="hover:text-orange-600"> <a href="#">Trending </a></li>
                <li class="hover:text-orange-600"> <a href="#">Categories </a></li>
            </ul>
        </div> -->
</template>

<script>
import { ref } from 'vue';
export default {
    setup() {
        let showMenu = ref(false);
        const toggleNav = () => (showMenu.value = !showMenu.value);
        return { showMenu, toggleNav };
    },
};


</script>

<style scoped>
li {
    display: inline;
    padding: 10px;
}
</style>