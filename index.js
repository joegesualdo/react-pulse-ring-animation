var React = require("react")

var PulseRingAnimation= React.createClass({
  getDefaultProps: function() {
    return {
      color: '#1abc9c',
      strokeWidth: 9,
      size: 120,
      speed: 2000,
      // TODO: Should delay 
      // delay:1000,
      fps: 60,
      distance:100
    };
  },
  getInitialState: function(){
    return {
      radius1: this.props.size/4,
      radius2: 0,
      opacity1: 0.0,
      opacity2: 0.0,
      intervalFn: null
    }
  },
  componentDidMount: function() {
    var that = this;
    var intervalFn = setInterval(function() {
      window.requestAnimationFrame(that.performTick)
    }, 1000/that.props.fps)
    this.setState({
      intervalFn: intervalFn
    });
  },

  componentWillUnmount: function() {
    clearInterval(this.state.intervalFn)
  },

  performTick: function(){
    var maxRadius = (this.props.size/2) - this.props.strokeWidth;
    // Calculates how far the radius should move one eact tick
    var stepDistance = maxRadius/(this.props.fps* (this.props.speed/1000))
    var newRadius1 = (this.state.radius1 % maxRadius) + stepDistance;
    var newRadius2 = (this.state.radius2 % maxRadius) + stepDistance;
    var newOpacity1 = 1 - (newRadius1/(maxRadius))
    var newOpacity2 = 1- (newRadius2/(maxRadius))

    this.setState({
     radius1: newRadius1,
     radius2: newRadius2,
     opacity1: newOpacity1,
     opacity2: newOpacity2
    });
  },

  render: function(){
    return (
      <div style={{display: "inline-block", fontSize: "0", position: "relative"}}>
        <div className="content" 
          style={{zIndex: 1, position: "relative", textAlign: "center", margin: "0 auto", position: "relative", fontSize: "14", padding: String(this.props.distance)}}>
          <div style={{display: "inline-block", position: "relative"}}>
          {this.props.children}
        </div>
        </div>
      <svg style={{position: "absolute", zIndex: 0, top: 0, left: "0", right: "0"}}
        viewBox={"0 0 "+this.props.size+" " +this.props.size} 
        preserveAspectRatio="xMidYMid">
        <rect 
          x="0" 
          y="0" 
          width={String(this.props.size)} 
          height={String(this.props.size)} 
          fill="#ffffff" 
          style={{fill: "rgb(254, 254, 254)"}}>
        </rect>
        <circle 
          cx={String(this.props.size/2)} 
          cy={String(this.props.size/2)} 
          r={String(this.state.radius1)} 
          fill="none" 
          strokeWidth={String(this.props.strokeWidth)} 
          strokeLinecap="round" 
          style={{stroke: this.props.color}} 
          opacity={String(this.state.opacity1)}>
        </circle>
      </svg>
    </div>
    )
  }
})

module.exports = PulseRingAnimation;
