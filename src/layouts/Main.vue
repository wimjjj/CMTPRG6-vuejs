<template>
    <div class="container">
        <v-link id="homelink" href="/"><span class="glyphicon glyphicon-home"></span> home</v-link>

        <slot></slot>
    </div>
</template>

<script>
    import VLink from '../components/VLink.vue'

    export default {
        components: {
        VLink
        }
    }
</script>

<style scoped>
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 15px 30px;
    }
</style>
