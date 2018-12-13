import React from 'react'
import YouTube from 'react-youtube'
import styles from './styles/Player.css'

class YoutubeBackground extends React.Component {
  constructor(props) {
    super(props)

    const aspectRatio = this.props.aspectRatio.split(':')
    this.state = {
      aspectRatio: aspectRatio[0] / aspectRatio[1],
      videoHeight: 10,
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions() {
    const { aspectRatio } = this.state
    const containerWidth = this.container.clientWidth
    const containerHeight = this.container.clientHeight
    const containerAspectRatio = containerWidth / containerHeight

    let videoHeight = containerHeight
    let videoWidth = containerWidth
    let videoY = 0
    let videoX = 0

    if (containerAspectRatio > aspectRatio) {
      videoHeight = containerWidth / aspectRatio
      videoY = (videoHeight - containerHeight) / -2
    } else {
      videoWidth = containerHeight * aspectRatio
      videoX = (videoWidth - containerWidth) / -2
    }

    this.setState({
      videoHeight,
      videoWidth,
      videoY,
      videoX,
    })
  }

  onEnd(event) {
    event.target.playVideo()
  }

  onReady(event) {
    event.target.playVideo()
    this.props.onReady()
  }

  render() {
    const { videoHeight, videoWidth, videoX, videoY } = this.state
    const { style, children, className, overlay, videoId } = this.props

    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        mute: 1,
      },
    }

    return (
      <div
        style={style}
        ref={c => (this.container = c)}
        className={[styles.container, className].join(' ')}
      >
        <div>{children}</div>
        <div
          className={styles.videoContainer}
          style={{
            width: videoWidth + 'px',
            height: videoHeight + 'px',
            top: videoY + 'px',
            left: videoX + 'px',
          }}
        >
          {overlay && (
            <div
              className={styles.overlay}
              style={{ backgroundColor: overlay }}
            />
          )}
          <YouTube
            videoId={videoId}
            onPlay={this.props.onPlay}
            onPause={this.props.onPause}
            onEnd={this.props.onEnd}
            onError={this.props.onError}
            onStateChange={this.props.onStateChange}
            onPlaybackRateChange={this.props.onPlaybackRateChange}
            onPlaybackQualityChange={this.props.onPlaybackQualityChange}
            onEnd={this.onEnd}
            onReady={this.onReady.bind(this)}
            opts={videoOptions}
            className={styles.videoIframe}
          />
        </div>
      </div>
    )
  }
}

YoutubeBackground.defaultProps = {
  aspectRatio: '16:9',
  overlay: 'false',
  onReady: () => {},
}

export default YoutubeBackground
