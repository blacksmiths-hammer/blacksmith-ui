import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
// style
import styles from '../placeholder.scss';

class RoundShape extends PureComponent {
  /**
   * propTypes
   * @property {String} className
   * @property {Object} style
   */
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
  };

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { className, style } = this.props;
    const classes = [styles.round, className].filter(c => c).join(' ');

    return (
      <div className={classes} style={{ ...style }} />
    );
  }

}

export default CSSModules(RoundShape, styles);
