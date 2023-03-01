const { ccclass, property, disallowMultiple, executionOrder, menu } = cc._decorator

@ccclass
@disallowMultiple
@executionOrder(100)
@menu("Adapter/ViewAdapter")
class ViewAdapter extends cc.Component {
	@property({tooltip:"是否拉伸节点(需有Widget组件),否者正比例缩放"})
	stretch: boolean = false

	onLoad() {
		if (!this.stretch) {
			const winSize: cc.Size = window['winSize'] || cc.winSize
			this.node.scale = Math.max(winSize.width / this.node.width, winSize.height / this.node.height)
		} else {
			const widget = this.node.getComponent(cc.Widget)
			if (!widget || (!window['adaptWidth'] && !window['adaptHeight'])) {
				return
			}

			if (widget.isAlignLeft) {
				this.node.width += window['adaptWidth']
				widget.left -= window['adaptWidth']
			}
			if (widget.isAlignRight) {
				this.node.width += window['adaptWidth']
				widget.right -= window['adaptWidth']
			}
			if (widget.isAlignTop) {
				this.node.height += window['adaptHeight']
				widget.top -= window['adaptHeight']
			}
			if (widget.isAlignBottom) {
				this.node.height += window['adaptHeight']
				widget.bottom -= window['adaptHeight']
			}

			// widget.updateAlignment()
		}
	}
}
