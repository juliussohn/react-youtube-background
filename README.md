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
  videoId={string}     // default -> null
  aspectRatio={string} // default -> "16:9"
  overlay={string}     // defaults -> null | e.g. "rgba(0,0,0,.4)"
  className={string}   // defaults -> null
  onReady={func}       // defaults -> null
  nocookie             // sets host to https://www.youtube-nocookie.com to avoid loading Google's cookies
>
  {/* YOUR CONTENT */}
</YoutubeBackground>
```
