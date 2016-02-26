## Pulse ring animation react component
> A pulse ring animation react component made with SVG

![react-pulse-ring-animation-demo](https://raw.github.com/joegesualdo/react-pulse-ring-animation/master/pulse-ring-demo.gif)

## Install
```
$ npm install --save react-pulse-ring-animation
```

## Usage
```javascript
var ReactDOM = require("react-dom")
var PulseRingAnimation = require('react-pulse-ring-animation')

ReactDOM.render(
  <PulseRingAnimation>
    <img src="http://a.deviantart.net/avatars/g/r/grumpy-cat-plz.jpg?1" style={{borderRadius: "50%"}}/>
  </PulseRingAnimation>,
 document.getElementById("react-app")
);
