import React from 'react';
import YouTube from 'react-youtube';
import './styles/Player.css';

class Player extends React.Component {

	constructor(props) {
		super(props)

		const aspectRatio = this.props.aspectRatio.split(':')

		this.state = {
			aspectRatio: aspectRatio[0] / aspectRatio[1],
			videoHeight: 10
		}
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions.bind(this))
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions.bind(this))
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
			videoX
		});
	}

	onEnd (event){
		event.target.playVideo();
	}

	render() {
		const { videoHeight, videoWidth, videoX, videoY } = this.state
		const { style, children } = this.props
		const playerProps = (({
			videoId,
			onReady
		}) => ({
			videoId,
			onReady
		}))(this.props);

		const videoOptions = {
			playerVars: { 
				autoplay: 1,
				controls: 0,
				rel: 0,
				showinfo: 0
			}
		};

		return (
			<div style={style} ref={c => this.container = c} className="rybp-container">
				<div>{children}</div>
				<div
					className="rybp-video-container"
					style={{
						width: videoWidth + 'px',
						height: videoHeight + 'px',
						top: videoY + 'px',
						left: videoX + 'px'
					}}
				>
					<YouTube
						{...playerProps}
						onEnd={this.onEnd}
						opts={videoOptions}
						className="rybp-video-iframe"
					></YouTube>
				</div>
			</div>

		);
	}
}

Player.defaultProps = {
	aspectRatio: '16:9',
	videoId: 'jssO8-5qmag'
}

export default Player;