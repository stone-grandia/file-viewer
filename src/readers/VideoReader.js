import BaseReader from './BaseReader'
import LogInfo from '../common/LogInfo'

export default class VideoReader extends BaseReader {
  execute (file) {
    super.readAsUrl(file)
  }

  onLoadEnd (e) {
    super.onLoadEnd(e)
    console.log(new VideoReadResult(this.reader.result))
  }
}

class VideoReadResult extends LogInfo {
  constructor (url) {
    super()
    this.url = url
  }

  get html () {
    return `
<article>
  <video src="${this.url}" controls></video>
</article>
`
  }
}
