import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { YourContentIcon, CollectionsIcon } from 'components/icons';
import { Stack, Typography } from 'components';
import classNames from 'classnames';
import './styles.scss';

interface IMenuItem {
  to: string;
  title: string;
  subtitle: string;
  icon: any;
  slug: string;
}

const Menu = () => {
  const location = useLocation();

  const menuItems: IMenuItem[] = [
    {
      to: '/',
      title: 'Dashboard',
      subtitle: 'See all your metrics integrations',
      icon: <YourContentIcon />,
      slug: '/',
    },
    {
      to: '/workflows',
      title: 'Workflow manager',
      subtitle: 'Manage your automated workflows',
      icon: <CollectionsIcon />,
      slug: 'workflows',
    },
  ];

  return (
    <header className="menu" id="website-library-menu" role="navigation">
      <div className="container mx-auto px-3">
        <Stack direction="horizontal" hAlign="end">
          <Stack component="ul" direction="horizontal" space="0" className="menu__items">
            {menuItems.map((item: IMenuItem, index: number) => {
              let isActive = false;
              if (item.slug !== '/') {
                isActive = location.pathname.includes(item.slug);
              }
              if (item.slug === '/') {
                isActive = location.pathname === item.to;
              }

              const menuItemsClasses = classNames('menu__item', {
                'menu__item--active': isActive,
              });
              return (
                <li key={index} id={`menu-items-${index}`}>
                  <Link
                    to={item.to}
                    className={menuItemsClasses}
                    data-testid={`menu-items-link-${index}`}
                    id={`website-menu-item-${index}`}
                  >
                    {React.cloneElement(
                      item.icon,
                      {
                        isActive,
                      },
                      null,
                    )}
                    <Stack direction="vertical" space="0" className="ml-2">
                      <Typography size="sm" color="black" className="menu__text">
                        {item.title}
                      </Typography>
                      <Typography size="xs" color="gray" className="menu__text">
                        {item.subtitle}
                      </Typography>
                    </Stack>
                  </Link>
                </li>
              );
            })}
          </Stack>
        </Stack>
      </div>
    </header>
  );
};
export default Menu;
