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
                <div class="
                        text-xl
                        font-bold
                        md:text-2xl
                        "><img src="@/assets/images/logo.svg" alt="logo" />
                </div>
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

    <!-- <div id="myNav" :class="{ 'navbar_open': showNavbar, 'navbar': !showNavbar }"> -->
        <!-- <a href="javascript:void(0)" class="closebtn" v-on:onclick="closeNavigation"></a> -->
        <!-- <div class="closebtn-my" @click="closeNavigation">
            <i class="fa fa-times"></i>
        </div>
        <div class="navbar-content-my">
            <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
        </div>
    </div>
    <div class="openbtn">
        <i class="fa fa-bars" @click="showNavigation"></i>
    </div> -->

    <!-- <span style="font-size:30px;cursor:pointer" v-on:onclick="showNavigation">&#9776; open</span> -->
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
// import { ref } from 'vue';



// // let showMenu = ref(false);
// // const toggleNav = () => (showMenu.value = !showMenu.value);
// // return { showMenu, toggleNav };
// let showNavbar = ref(false);

// function showNavigation() {
//     console.log("klik open");
//     showNavbar = true;
// }
// function closeNavigation() {
//     console.log("Klik close");
//     showNavbar = false;
// }
export default {
    data() {
        return {
            showNavbar: false,
            showMenu: false
        }
    },
    methods: {
        showNavigation() {
            console.log("USO U OPEN");
            this.showNavbar = true;
        },
        closeNavigation() {
            this.showNavbar = false;
        },
        toggleNav() {
            this.showMenu = !this.showMenu;
        }
    }
}


</script>

<style scoped>
li {
    display: inline;
    padding: 10px;
}

@import url('https://use.fontawesome.com/releases/v5.9.0/css/all.css');

.navbar_open {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    overflow-y: hidden;
    transition: 0.5s;
    background-color: #2b4c72;
}

.navbar {
    width: 100%;
    height: 0%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.9);
    overflow-y: hidden;
    transition: 0.5s;
    background-color: #2b4c72;
}

.navbar-content-my {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.navbar a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.navbar a:hover,
.navbar a:focus {
    color: #f1f1f1;
}

.closebtn-my {
    position: absolute;
    top: 20px;
    left: 45px;
    font-size: 60px;
    color: white;
    cursor: pointer;
}

.navbar {
    position: absolute;
    top: 20px;
    left: 45px;
    font-size: 60px;
    color: white;
    cursor: pointer;
}

.openbtn {
    font-size: 30px;
    cursor: pointer;
}

@media screen and (max-height: 450px) {
    .navbar {
        overflow-y: auto;
    }

    .navbar a {
        font-size: 20px;
    }

    .navbar .closebtn {
        font-size: 40px;
        top: 15px;
        right: 35px;
    }
}
</style>