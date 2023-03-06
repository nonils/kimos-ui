import React from 'react';
import { Typography } from 'components';
import './styles.scss';

type Props = {
  home?: string;
  pages: string[];
  handleNavigation: (index: number) => void;
};

const Breadcrumb: React.FC<Props> = ({ home = 'Home', pages, handleNavigation }) => {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb" id="breadcrumb">
      <ol className="breadcrumb__list">
        <li id="breadcrumb-home">
          <button
            type="button"
            className="breadcrumb__button"
            onClick={() => {
              if (pages.length > 0) {
                handleNavigation(-1);
              }
            }}
            id="breadcrumb-button-0"
          >
            <Typography size="sm" color="gray" className="breadcrumb__text">
              {home}
            </Typography>
          </button>
        </li>
        {pages.map((page: string, index: number) => {
          const { length: pagesLength } = pages;
          const isLast = pagesLength - 1 === index;

          return (
            <li key={index} id={`breadcrumb-item-${index + 1}`}>
              <button
                type="button"
                className="breadcrumb__button"
                onClick={() => {
                  if (!isLast) {
                    handleNavigation(index);
                  }
                }}
                id={`breadcrumb-button-${index + 1}`}
              >
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Typography
                  size="sm"
                  color={isLast ? 'black' : 'gray'}
                  className="breadcrumb__text ml-1"
                >
                  {page}
                </Typography>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export { Breadcrumb };
