import BaseReader from './BaseReader'
import LogInfo from '../common/LogInfo'

export default class AudioReader extends BaseReader {
  execute (file) {
    super.readAsUrl(file)
  }

  onLoadEnd (e) {
    super.onLoadEnd(e)
    console.log(new AudioReadResult(this.reader.result))
  }
}

class AudioReadResult extends LogInfo {
  constructor (url) {
    super()
    this.url = url
  }

  get html () {
    return `
<article>
  <audio src="${this.url}" controls></audio>
</article>
`
  }
}
