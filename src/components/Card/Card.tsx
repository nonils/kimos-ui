import React from 'react';
import classNames from 'classnames';
import './styles.scss';
import { Typography } from 'components';

type Props = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  header?: string;
  headerCenter?: boolean;
};

const Card: React.FC<Props> = ({
  children,
  variant = 'primary',
  className,
  header,
  headerCenter,
}) => {
  const classes = classNames('card', className, {
    card__primary: variant === 'primary',
    card__secondary: variant === 'secondary',
    card__tertiary: variant === 'tertiary',
    'card--header': header,
  });

  const contentClasses = classNames('card__content', {
    'card__content--active': header,
  });

  return (
    <article className={classes}>
      {header && (
        <header className="card__header">
          <Typography
            size="sm"
            color="gray-900"
            align={headerCenter ? 'center' : 'left'}
            className="card__title"
          >
            {header}
          </Typography>
        </header>
      )}
      <div className={contentClasses}>{children}</div>
    </article>
  );
};

export { Card };
