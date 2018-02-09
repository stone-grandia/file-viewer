import LogInfo from '../common/LogInfo'

export default class BaseReader {
  get reader () {
    if (!this._reader) {
      this._reader = new FileReader()
      this._reader.addEventListener('load', this.onLoad.bind(this))
      this._reader.addEventListener('loadstart', this.onLoadStart.bind(this))
      this._reader.addEventListener('loadend', this.onLoadEnd.bind(this))
      this._reader.addEventListener('progress', this.onProgress.bind(this))
      this._reader.addEventListener('abort', this.onAbort.bind(this))
      this._reader.addEventListener('error', this.onError.bind(this))
    }
    return this._reader
  }

  readAsText (file) {
    this.reader.readAsText(file)
    this.progress = new ReadProgressInfo(file.name, 'text')
    console.log(this.progress)
  }

  readAsUrl (file) {
    this.reader.readAsDataURL(file)
    this.progress = new ReadProgressInfo(file.name, 'url')
    console.log(this.progress)
  }

  readAsBinary (file) {
    this.reader.readAsArrayBuffer(file)
    this.progress = new ReadProgressInfo(file.name, 'binary')
    console.log(this.progress)
  }

  execute (file) {
  }

  onLoadStart (e) {
    this.progress.loaded = e.loaded
    this.progress.total = e.total
  }

  onProgress (e) {
    this.progress.loaded = e.loaded
    this.progress.total = e.total
  }

  onLoad (e) {
    this.progress.loaded = e.loaded
    this.progress.total = e.total
  }

  onLoadEnd (e) {
    this.progress.loaded = e.loaded
    this.progress.total = e.total
    this.progress.state = 'complete'
  }

  onAbort (e) {
    this.progress.state = 'abort'
  }

  onError (e) {
    console.error(e)
    this.progress.state = 'error'
  }
}


class ReadProgressInfo extends LogInfo {
  constructor (file, type) {
    super()
    this.file = file
    this.loaded = 0
    this.total = 0
    this.type = type
    this.state = ''
  }

  get html () {
    return `
<div>
<span>read ${this.file} as ${this.type}:</span>
<span>${this.loaded}/${this.total}(${parseInt(100 * this.loaded / this.total)}%)</span>
<span class="${this.state}">${this.state}</span>
</div>
`
  }
}
