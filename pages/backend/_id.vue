<template>
    <div>
        <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="80px" label-position="right">
            <el-form-item label="标题" prop="name">
              <el-input v-model="blog.tit"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop="desc">
              <el-input v-model="blog.blogDesc"></el-input>
            </el-form-item>
            <el-form-item label="正文">
              <div class="quill-editor" 
                  :content="blog.blogContent"
                  @change="onEditorChange($event)"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)"
                  v-quill:myQuillEditor="editorOption">
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
            </el-form>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    layout: 'backend',
    data () {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入博文标题', trigger: 'blur' },
            { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请输入博文简介', trigger: 'blur' },
            { min: 3, max: 25, message: '长度在 3 到 25 个字符', trigger: 'blur' }
          ]
        },
        content: '<p>I am Example</p>',
        editorOption: {
          // some quill options
          // modules: {
          //   toolbar: [
          //     ['bold', 'italic', 'underline', 'strike'],
          //     ['blockquote', 'code-block']
          //   ]
          // }
        }
      }
    },
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
    methods: {
      async onSubmit () {
        if (this.content.length > 0) {
          let isSubmit = window.confirm('确定提交？')
          if (isSubmit) {
            let submitResult = await axios.post('/api/blog/update', {
              id: this.blog.id,
              title: this.blog.tit,
              author: 'Richar',
              desc: this.blog.blogDesc,
              content: this.content
            })
            console.log('--------')
            console.log(submitResult)
            if (submitResult.data.code === 200) {
              alert('博客提交成功！')
              window.location.href = '/backend/list'
            } else {
              alert('提交失败')
            }
          }
        }
        console.log('submit!')
      },
      onEditorBlur (editor) {
        console.log('editor blur!', editor)
      },
      onEditorFocus (editor) {
        console.log('editor focus!', editor)
      },
      onEditorReady (editor) {
        console.log('editor ready!', editor)
      },
      onEditorChange ({ editor, html, text }) {
        console.log('editor change!', editor, html, text)
        this.content = html
      }
    }
  }
</script>

<style lang="scss">
  .quill-editor {
    min-height: 300px;
    max-height: 500px;
    overflow-y: auto;
  }
  .ql-snow{
    background-color: #fff;
  }
</style>
