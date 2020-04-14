/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
// @ts-ignore
import Iconfont_toutiao from './toutiao/toutiao';

interface Props {
  name: 'alipay' | 'user' | 'setup';
  size?: number;
  color?: string | string[];
}

export const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  // FIXME: RemaxJs doesn't support pxTransform()
  // @ts-ignore
  return <Iconfont_toutiao name={name} size={size} color={color} />;
};

IconFont.defaultProps = {
  size: 20,
};

export default IconFont;
