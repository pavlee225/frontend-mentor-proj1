<template>
    <div class="flex justify-between p-2 mt-5">
        <div class="">
            <img src="@/assets/images/logo.svg" alt="logo" />
        </div>
        <div class="flex p-2">
            <ul>
                <li class="hover:text-orange-600"><a href="#"> Home </a></li>
                <li class="hover:text-orange-600"><a href="#"> New </a></li>
                <li class="hover:text-orange-600"> <a href="#">Popular </a></li>
                <li class="hover:text-orange-600"> <a href="#">Trending </a></li>
                <li class="hover:text-orange-600"> <a href="#">Categories </a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
li {
    display: inline;
    padding: 20px;
}
</style>