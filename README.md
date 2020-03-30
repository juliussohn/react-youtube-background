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

```jsx
<YoutubeBackground
  videoId={string}                /* default -> null */
  aspectRatio={string}            /* default -> "16:9" */
  overlay={string}                /* default -> null | e.g. "rgba(0,0,0,.4)" */
  className={string}              /* default -> null */
  nocookie={bool}                 /* default -> false | sets host to https:/*www.youtube-nocookie.com to avoid loading Google's cookies */
  playerOptions={object}          /* default -> {}  | https://developers.google.com/youtube/player_parameters*/
  onReady={func}                  /* default -> null | returns event with player object */
  onEnd={func}                    /* default -> null | returns event with player object */
  onPlay={func}                   /* default -> null | returns event with player object */
  onPause={func}                  /* default -> null | returns event with player object */
  onError={func}                  /* default -> null | returns event with player object */
  onStateChange={func}            /* default -> null | returns event with player object */
  onPlaybackRateChange={func}     /* default -> null | returns event with player object */
  onPlaybackQualityChange={func}  /* default -> null | returns event with player object */

>
  {/* YOUR CONTENT */}
</YoutubeBackground>
```

