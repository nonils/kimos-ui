import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import { FormattedMessage } from 'react-intl';
import React, { useEffect, useState } from 'react';

type Prop = {
  changePageHandler: (el: any) => void;
  page: number;
  size: number;
  total: number;
};

const Pagination: React.FC<Prop> = ({ changePageHandler, page, size, total }) => {
  const pageArray = [];

  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setTotalPages(total / size);
  }, [size, total, page]);

  for (let i = 0; i < totalPages; i++) {
    if (
      i === page ||
      i === page - 1 ||
      i === page + 1 ||
      i === 0 ||
      i === 1 ||
      i === totalPages - 1 ||
      i === totalPages - 2
    ) {
      pageArray.push({
        link: i,
        showText: i + 1,
        current: page === i,
      });
    } else {
      if (pageArray[pageArray.length - 1].showText !== '...') {
        pageArray.push({
          link: '#',
          showText: '...',
          current: false,
        });
      }
    }
  }

  return (
    <nav className="-z-20 border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
          onClick={() => {
            if (page - 1 >= 0) changePageHandler(page - 1);
          }}
        >
          <ArrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          <FormattedMessage id={'previous'} />
        </a>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {pageArray.map((element) => {
          if (element.current) {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/jsx-key
              <a
                onClick={() => changePageHandler(element.link)}
                className="border-red-300 text-red-400 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                aria-current="page"
              >
                {element.showText}
              </a>
            );
          } else {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/react-in-jsx-scope,react/jsx-key
              <a
                onClick={() => changePageHandler(element.link)}
                className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
              >
                {element.showText}
              </a>
            );
          }
        })}
      </div>

      <div className="-mt-px w-0 flex-1 flex justify-end">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <a
          onClick={() => {
            if (page + 1 <= totalPages) changePageHandler(page + 1);
          }}
          className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
        >
          <FormattedMessage id={'next'} />

          <ArrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </a>
      </div>
    </nav>
  );
};

export { Pagination };
