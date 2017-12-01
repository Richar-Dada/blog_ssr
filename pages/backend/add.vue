<template>
    <div>
        <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="80px" label-position="right">
            <el-form-item label="标题" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop="desc">
              <el-input v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item label="正文">
              <div class="quill-editor" 
                  :content="content"
                  @change="onEditorChange($event)"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)"
                  v-quill:myQuillEditor="editorOption">
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
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
    methods: {
      async onSubmit () {
        if (this.content.length > 0) {
          let isSubmit = window.confirm('确定提交？')
          if (isSubmit) {
            let submitResult = await axios.post('/api/blog/add', {
              title: this.ruleForm.name,
              author: 'Richar',
              desc: this.ruleForm.desc,
              content: this.content
            })
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
      },
      resetForm (formName) {
        console.log('reset')
        console.log(this.$refs[formName].resetFields)
        this.$refs[formName].resetFields()
      }
    },
    mounted () {
      console.log('app init, my quill insrance object is:', this.myQuillEditor)
      setTimeout(() => {
        this.content = 'i am changed'
      }, 3000)
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
