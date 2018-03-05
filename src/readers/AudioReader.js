import BaseReader from './BaseReader'
import LogInfo from '../common/LogInfo'

export default class AudioReader extends BaseReader {
  execute (file) {
    let url = super.readAsUrl(file)
    console.log(new AudioReadResult(url))
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
  <p>${this.url}</p>
  <audio src="${this.url}" controls></audio>
</article>
`
  }
}
