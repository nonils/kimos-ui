import React from 'react';
import Loader from 'react-loader-spinner';
import { LoaderProps } from 'react-loader-spinner/dist/types';
import colors from 'tailwindcss/colors';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

type Props = {
  type?: LoaderProps['type'];
  height: number;
  width: number;
  color?: string;
};

const Spinner: React.FC<Props> = ({ type = 'Grid', width, height, color = colors.blue[500] }) => {
  return <Loader type={type} color={color} height={width} width={height} />;
};

export { Spinner };
