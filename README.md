# react-youtube-background
A React component that uses a Youtube video as background for a container.

## Installation
```
$ npm install react-youtube-background
```

## Usage

Import the component
```javascript
import YoutubeBackground from 'react-youtube-background'
```

Use the component in you render function

```
<YoutubeBackground
  videoId={string}                // default -> null
  aspectRatio={string}            // default -> "16:9"
  overlay={string}                // defaults -> null | e.g. "rgba(0,0,0,.4)"
  className={string}              // defaults -> null
  nocookie={bool}                 // defaults -> false sets host to https://www.youtube-nocookie.com to avoid loading Google's cookies
  onReady={func}                  // defaults -> null
  onEnd={func}                    // defaults -> null
  onPlay={func}                   // defaults -> null
  onPause={func}                  // defaults -> null
  onError={func}                  // defaults -> null
  onStateChange={func}            // defaults -> null
  onPlaybackRateChange={func}     // defaults -> null
  onPlaybackQualityChange={func}  // defaults -> null

>
  {/* YOUR CONTENT */}
</YoutubeBackground>
```

