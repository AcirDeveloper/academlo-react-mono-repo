import ReactDOM from 'react-dom'
import React from 'react'

const portalRoot = document.getElementById('portal')

export default class Portal extends React.Component {
	constructor() {
		super()
		this.el = document.createElement('div')
	}

	componentDidMount() {
		portalRoot.appendChild(this.el)
	}

	componentWillUnmount() {
		portalRoot.removeChild(this.el)
	}

	render() {
		const { children } = this.props
		return ReactDOM.createPortal(children, this.el)
	}
}
