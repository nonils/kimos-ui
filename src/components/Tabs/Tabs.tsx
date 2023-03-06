import React, { useState } from 'react';
import classNames from 'classnames';
import TabPane from '../TabPane/TabPane';
import './styles.scss';

type Props = {
  children: React.ReactElement[];
  tabs: string[];
  space?: number;
  centered?: boolean;
  className?: string;
};

const Tabs: React.FC<Props> = ({ tabs, children, space = '8', centered = false, className }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  const navClasses = classNames('tab__nav', `space-x-${space}`, {
    'justify-center': centered,
  });

  const tabClasses = classNames('tab', className);

  return (
    <div className={tabClasses}>
      <nav className={navClasses} aria-label="Tabs">
        {tabs.map((item, index) => {
          const btnClasses = classNames('tab__button', {
            'tab__button--active': index === activeTab,
          });

          return (
            <button
              data-testid={`tab-button-${index}`}
              id={`tab-button-${index}`}
              onClick={() => handleClick(index)}
              key={index}
              type="button"
              className={btnClasses}
            >
              {item}
            </button>
          );
        })}
      </nav>
      {children[activeTab]}
    </div>
  );
};

const TabsNav = Object.assign(Tabs, {
  Pane: TabPane,
});

export { TabsNav };
