<template>
    <main-layout>
        <v-link :href=links.self.href><span class="glyphicon glyphicon-circle-arrow-left"></span> blog</v-link>
        <form>
            <div class="form-group" onsubmit="return false">
                <label for="title">title</label>
                <input type="text" class="form-control" id="title" :v-model="blog.title" :value="blog.title">
            </div>
            <div class="form-group">
                <label for="author">author:</label>
                <input type="text" class="form-control" id="author" :v-model=blog.author :value="blog.author">
            </div>
            <div class="form-group">
                <label for="body">body:</label>
                <textarea class="form-control" rows="5" id="body" :v-model="blog.body" :value="blog.body"></textarea>
            </div>
            <button type="button" class="btn btn-default" v-on:click="update">Submit</button>
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
            blog: {
                title: '',
                author: '',
                body: ''
            },
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
   methods: {
        update: function(){
            this.$http.post('http://145.24.222.128/' + this.blog_id + '?_method=PATCH',
                {
                    'title': this.blog.title,
                    'author': this.blog.author,
                    'body': this.blog.body
                }).then(function(data){
                this.$set(this, 'blog', data.body);
                console.log(data);
            }.bind(this));
        }
   },
   components:{
       MainLayout,
       VLink
   }
}
</script>
