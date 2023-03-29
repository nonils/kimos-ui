import React from 'react';
import { IActivityItem } from '../../types';

type ActivityFeedProps = {
  activityItems: IActivityItem[];
};

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activityItems }) => {
  return (
    <>
      <div className="pl-6 lg:w-80">
        <div className="pb-2 pt-6">
          <h2 className="text-sm font-semibold">Activity</h2>
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ul role="list" className="divide-y divide-gray-200">
            {activityItems.map((item: IActivityItem) => (
              <li key={item.commit} className="py-4">
                <div className="flex space-x-3">
                  <img
                    className="h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">You</h3>
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>
                    <p className="text-sm text-gray-500">
                      Deployed {item.project} ({item.commit} in master) to {item.environment}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 py-4 text-sm">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-900">
              View all activity
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { ActivityFeed };
