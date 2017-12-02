<template>
  <section class="blog-container">
    <h1 class="title">
      {{ blog.tit }}
    </h1>
    <h2 class="info">
      {{ blog.createDate }} {{ ' ' + blog.author }}
    </h2>
    <div class="content" v-html="blog.blogContent">
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'id',
  asyncData ({ params, error }) {
    console.log(params.id)
    return axios.get('/api/blog/' + params.id)
      .then((res) => {
        console.log(res.data.blog[0])
        return { blog: res.data.blog[0] }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'blog not found' })
      })
  },
  head () {
    return {
      title: `${this.blog.tit}`
    }
  }
}
</script>

<style scoped>
.blog-container{
  width: 1000px;
  margin: 20px auto;
}
.title
{
  font-size: 28px;
  margin-top: 30px;
  font-weight: bold;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
  font-size: 16px;
  padding-bottom: 10px;
  border-bottom: 1px dotted #ccc;
}
.button
{
  margin-top: 30px;
}
</style>
