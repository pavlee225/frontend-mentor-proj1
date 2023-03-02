<template>
    <div class="flex">
        <div class="bg-blue-900 p-5 pt-8 w-72 duration-300" :class="{ 'w-72': open, 'w-0': !open }"><button
                class="text-3xl rounded-full absoulute -right-3 top-9 border border-dark-purple cursor-pointer"
                @click="setOpen">TEST</button>

            <div class="inline-flex">
                <button> IKONICA NOVA </button>
                <h1>Tailwind </h1>
            </div>
            <div class="flex items-center rounded-md"></div>
        </div>

        <div class="p-7">
            <h1> HOME PAGE </h1>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            open: false
        }
    },
    methods: {
        setOpen() {
            console.log("KLIKNUO TEST")
            this.open = !this.open;
        }
    }
}

</script>
<style scoped>
@import url('https://use.fontawesome.com/releases/v5.9.0/css/all.css');
</style>