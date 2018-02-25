<template>
    <div class="app-header">
        <div class="block row m-0">
            <div class="col-4 brand">
                <router-link :to="{ name: 'Index' }">ITCAMP<b>14</b></router-link>
            </div>
            <div class="col-8 menu">
                <div class="row p-0 m-0">
                    <div class="col">
                        <router-link :to="{ name: 'Highlight' }">HIGHLIGHT</router-link>
                    </div>
                    <div class="col">
                        <router-link :to="{ name: 'Camp' }">CAMP</router-link>
                    </div>
                    <div class="col">
                        <router-link :to="{ name: 'Schedule' }">SCHEDULE</router-link>
                    </div>
                    <div class="col">
                        <router-link :to="{ name: 'Register' }" class="button-ghost">REGISTER</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '@scss/layouts/header.scss'
export default {
    name: "Header"
}
</script>

<style>

</style>
