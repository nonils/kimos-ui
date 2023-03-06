import React from 'react';

type DashboardTabsProps = {
  tabs: any[];
};

function classNames({ classes }: { classes?: any[] }) {
  return classes?.filter(Boolean).join(' ');
}

const DashboardTabs: React.FC<DashboardTabsProps> = ({ tabs }) => {
  return (
    <div className="border-b border-gray-200">
      <div className="sm:flex sm:items-baseline">
        <div className="mt-4 sm:mt-0 sm:ml-10">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames({
                  classes: [
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
                  ],
                })}
                aria-current={tab.current ? 'page' : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export { DashboardTabs };
