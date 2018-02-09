<template>
  <form>
    <section>
      <label>Reader</label>
      <article>
        <div>
          <select v-model="reader" :class="{error:error}">
            <option value="">choose a reader ...</option>
            <option v-for="(item,i) in readers" :key="i" :value="item.name">{{item.name}}</option>
          </select>
          <!--<a href="javascript:;">install a newer ...</a>-->
        </div>
      </article>
    </section>
    <section>
      <label>Target File</label>
      <article class="file">
        <div class="upload button">
          {{file?file.name:'drag file to here'}}
          <input type="file" @change="onFileChoose">
        </div>
        <div class="info" v-if="file">
          <div>file size: {{file.size|size}}</div>
          <div>last modify: {{file.lastModifiedDate|time}}</div>
          <div>
            <button type="button" @click="startLoad">Load</button>
          </div>
        </div>
      </article>
    </section>
  </form>
</template>
<script>
  import readers from '../readers'

  export default {
    data () {
      return {
        reader: '',
        file: '',
        error: false
      }
    },
    watch: {
      reader () {
        this.error = false
      }
    },
    computed: {
      readers () {
        return readers
      }
    },
    methods: {
      onFileChoose (e) {
        this.file = e.target.files[0]
      },
      startLoad () {
        let reader = readers.find(item => item.name === this.reader)
        if (reader) {
          this.$emit('load', {file: this.file, Reader: reader.factory})
        } else {
          this.error = true
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  select {
    width: 300px;
    &.error {
      border-color: red;
    }
  }

  .file {
    display: flex;
  }

  .upload {
    position: relative;
    width: 300px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    > div {
      white-space: pre-wrap;
    }
  }
</style>
