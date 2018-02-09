import TextReader from './TextReader'
import ImageReader from './ImageReader'
import AudioReader from './AudioReader'
import VideoReader from './VideoReader'

export default [
  {name: 'TextReader', factory: TextReader},
  {name: 'ImageReader', factory: ImageReader},
  {name: 'AudioReader', factory: AudioReader},
  {name: 'VideoReader', factory: VideoReader}
]
