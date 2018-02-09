import BaseReader from './BaseReader'
import LogInfo from '../common/LogInfo'

export default class ImageReader extends BaseReader {
  execute (file) {
    super.readAsUrl(file)
  }

  onLoadEnd (e) {
    super.onLoadEnd(e)
    console.log(new ImageReadResult(this.reader.result))
  }
}

class ImageReadResult extends LogInfo {
  constructor (url) {
    super()
    this.url = url
  }

  get html () {
    return `
<article>
  <img src="${this.url}">
</article>
`
  }
}
