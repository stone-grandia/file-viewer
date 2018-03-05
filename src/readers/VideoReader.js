import BaseReader from './BaseReader'
import LogInfo from '../common/LogInfo'

export default class VideoReader extends BaseReader {
  execute (file) {
    let url = super.readAsUrl(file)
    console.log(new VideoReadResult(url))
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
  <p>${this.url}</p>
  <video src="${this.url}" controls></video>
</article>
`
  }
}
