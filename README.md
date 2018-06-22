# react-youtube-background-player
A React component that uses a Youtube video as background for a container.

## Installation
```
$ npm install react-youtube-background-player
```

## Usage

Import the component
```javascript
import ReactYoutube from 'react-youtube-background-player'
```

Use the component in you render function

```jsx
<ReactYoutube 
  videoId={string}     // default -> "jssO8-5qmag"
  aspectRatio={string} // default -> "16:9"
  className={string}   // defaults -> null
  onReady={func}       // defaults -> null
>
  {/* YOUR CONTENT */}
</ReactYoutube>
```
