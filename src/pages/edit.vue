<template>
    <main-layout>
        <form>
            <div class="form-group" onsubmit="return false">
                <label for="title">title</label>
                <input type="text" class="form-control" id="title" v-model="blog.title">
            </div>
            <div class="form-group">
                <label for="author">author:</label>
                <input type="text" class="form-control" id="author" v-model="blog.author">
            </div>
            <div class="form-group">
                <label for="body">body:</label>
                <textarea class="form-control" rows="5" id="body" v-model="blog.body"></textarea>
            </div>
            <button type="button" class="btn btn-default"  v-on:click="patch">Submit</button>
        </form>
    </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
import VLink from '../components/VLink.vue'
import page from 'page'

export default{
    data () {
        return {
            blog: {
                title: '',
                body: '',
                author: ''
            }
        }
    },
    components:{
        MainLayout,
        VLink
    },
    beforeMount () {
        this.$http.get('http://145.24.222.128/' + window.blog_id).then(function(data){
            this.$set(this, 'blog', data.body);
        }.bind(this));
    },
    methods: {
        patch: function(){
            this.$http.post('http://145.24.222.128/' + window.blog_id + '?_method=PATCH',
                {
                    'title': this.blog.title,
                    'author': this.blog.author,
                    'body': this.blog.body
                }
            ).then(function(data){
                page('/' + String(data.body.id));
            }.bind(this));
        }
   }
}
</script>