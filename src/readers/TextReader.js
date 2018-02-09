import BaseReader from './BaseReader'
import LogInfo from '../common/LogInfo'

export default class TextReader extends BaseReader {
  execute (file) {
    super.readAsText(file)
  }

  onLoadEnd (e) {
    super.onLoadEnd(e)
    console.log(new TextReadResult(this.reader.result))
  }
}

class TextReadResult extends LogInfo {
  constructor (text) {
    super()
    this.text = text
  }

  get html () {
    return `
<article>
  <p>${this.text}</p>
</article>
`
  }
}
