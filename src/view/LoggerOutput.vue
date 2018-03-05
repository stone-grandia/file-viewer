<template>
  <div class="output">
    <div class="message" v-for="(item,i) in messages" :key="i" v-html="item.html"></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        messages: []
      }
    },
    mounted () {
      let origin = console.log
      console.log = (...values) => {
        this.messages.push(values[0])
        origin.apply(console, values)
      }
    },
    methods: {
      clear () {
        this.messages = []
      }
    }
  }
</script>
<style scoped lang="scss">
  .output {
    padding: 0 50px 150px;
  }
</style>
<style lang="scss">
  .message {
    color: $color-text;
    margin: 30px 0;
    article {
      padding: 10px;
      border: $style-border;
      background-color: $white2;
      p {
        white-space: pre-wrap;
        word-break: break-all;
        margin: 10px 0;
      }
      img {
        max-width: 90%;
        border: $style-border;
      }
      audio {
        border: $style-border;
      }
      video {
        width: 720px;
        height: 400px;
        background-color: black;
        border: $style-border;
      }
    }
    .complete, .abort, .error {
      padding: 4px 10px;
      border-radius: 4px;
      border: $style-border;
      color: $white;
    }
    .complete {
      background-color: $green;
      border-color: #4cae4c;
    }
    .abort {
      background-color: $yellow;
      border-color: #eea236;
    }
    .error {
      background-color: $red;
      border-color: #d43f3a;
    }
  }
</style>
