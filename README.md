# react-youtube-background
A React component that uses a Youtube video as background for a container.

## Installation
```
$ npm install react-youtube-background-player
```

## Usage

Import the component
```javascript
import YoutubeBackground from 'react-youtube-background'
```

Use the component in you render function

```jsx
<YoutubeBackground 
  videoId={string}     // default -> "jssO8-5qmag"
  aspectRatio={string} // default -> "16:9"
  className={string}   // defaults -> null
  onReady={func}       // defaults -> null
>
  {/* YOUR CONTENT */}
</YoutubeBackground>
```