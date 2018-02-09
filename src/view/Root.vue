<template>
  <div>
    <header>
      <div class="content"><b>File Viewer</b></div>
    </header>
    <nav class="input">
      <option-input class="content" @load="onRead"></option-input>
    </nav>
    <div class="output white0">
      <logger-output ref="output" class="content"></logger-output>
    </div>
    <footer>
      <div class="content">&copy;2018 Stone.Grandia</div>
    </footer>
  </div>
</template>
<script>
  import OptionInput from './OptionInput.vue'
  import LoggerOutput from './LoggerOutput.vue'

  export default {
    components: {OptionInput, LoggerOutput},
    methods: {
      onRead ({Reader, file}) {
        this.$refs.output.clear()
        new Reader().execute(file)
      }
    }
  }
</script>
