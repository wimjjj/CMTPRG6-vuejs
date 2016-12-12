<template>
    <main-layout>
        <form>
            <div class="form-group">
                <label for="title">title</label>
                <input type="text" class="form-control" id="title">
            </div>
            <div class="form-group">
                <label for="author">author:</label>
                <input type="text" class="form-control" id="author">
            </div>
            <div class="form-group">
                <label for="body">body:</label>
                <textarea class="form-control" rows="5" id="body"></textarea>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import VLink from '../components/VLink.vue'

export default{
    components:{
        MainLayout,
        VLink
    }
}
</script>
