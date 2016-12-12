<template>
    <main-layout>
        <v-link :href=links.self.href><span class="glyphicon glyphicon-circle-arrow-left"></span> blog</v-link>
        <form>
            <div class="form-group">
                <label for="title">title</label>
                <input type="text" class="form-control" id="title" :value=blog.title>
            </div>
            <div class="form-group">
                <label for="author">author:</label>
                <input type="text" class="form-control" id="author" :value=blog.author>
            </div>
            <div class="form-group">
                <label for="body">body:</label>
                <textarea class="form-control" rows="5" id="body">{{ blog.body }}</textarea>
            </div>
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
    </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import VLink from '../components/VLink.vue'

export default{
    data () {
        return {
            blog_id: window.blog_id,
            blog: {},
            links: {
                self: {
                    href: '/' + window.blog_id
                }
            }
        }
    },
    beforeMount () {
        this.$http.get('http://145.24.222.128/' + this.$data.blog_id).then(function(data){
            this.$set(this, 'blog', data.body);
        }.bind(this));
   },
    components:{
        MainLayout,
        VLink
    }
}
</script>
