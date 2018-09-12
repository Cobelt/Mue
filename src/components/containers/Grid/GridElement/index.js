import React, { Component } from 'react';

export class GridElement extends Component {
    constructor (props) {
        super(props);
        this.children = Array.isArray(props.children) ? props.children : [props.children];

        this.state = {
            col: props.col || 'auto',
            row: props.row || 'auto',
            width: props.width || 1,
            height: props.height || 1,
            fullWidth: props.fullWidth,
            fullHeight: props.fullHeight,
        };
        this.getStyle = this.getStyle.bind(this);
    }

    getStyle () {
        const { col, row, width, height } = this.state;
        return {
            gridColumn: `${col} / span ${width}`,
            gridRow: `${row} / span ${height}`,
            ...this.props.style
        };
    }
    render() {
        const { props, getStyle, children } = this;
        return <div className={props.className} style={ getStyle() }>{ children }</div>;
    }
}

export class Row extends Component {
    constructor (props) {
        super(props);
        this.fullWidth = true;
    }
    render() {
        const { props, fullWidth} = this;
        return React.createElement(GridElement, { ...props, className: props.className || '', fullWidth });
    }
}
// Doesn't work very well
export class Col extends Component {
    constructor (props) {
        super(props);

        this.col = props.col || props.pos;
        this.fullHeight = true;
    }
    render() {
        const { props, col, fullHeight} = this;
        return React.createElement(GridElement, { ...props, className: props.className || '', col, fullHeight });
    }
}