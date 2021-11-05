import React from "react";
import PropTypes from "prop-types";

import "./Display.css";

export default class Display extends React.Component {
  static propTypes = {
    value: PropTypes.string,
  };

  render() {
    return (
      <div className="component-display">
        <div className="top_div">{this.props.value}</div>
        <div className="bottom_div">
          { (this.props.operands.total !=null & this.props.operands.operation !=null)?
              ((this.props.operands.total!=null ? this.props.operands.total : '')+
              (this.props.operands.operation!=null ? (this.props.operands.operation === 'x^y' ? '^': this.props.operands.operation ) :'')+
              (this.props.operands.next!=null ? this.props.operands.next : '')) : ''
          }
        </div>
      </div>
    );
  }
}
