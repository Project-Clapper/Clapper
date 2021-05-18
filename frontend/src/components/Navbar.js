import React, { useMemo, useState, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useLocation } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { useSession } from '../contexts/SessionContext';
import { UserIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const { isLoading, user, signOut } = useSession();
  const [isHidden, setHidden] = useState(false);
  const location = useLocation();

  useMemo(() => {
    if (location.pathname.includes('/signin') || location.pathname.includes('/signup'))
      return setHidden(true);
    return setHidden(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Sign in', href: '/signin', current: false },
    { name: 'Sign up', href: '/signup', current: false },
    { name: 'Community', href: '/community', current: false },
  ];

  const navigationSignIn = [{ name: 'Community', href: '/community', current: false }];

  const navigationBox = () => {
    if (isLoading) return <div></div>;

    if (user)
      return (
        <div className="flex space-x-4">
          {navigationSignIn.map((item) => (
            <Link to={item.href}>
              <p
                key={item.name}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      );

    if (user === null)
      return (
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <Link to={item.href}>
              <p
                key={item.name}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      );
  };

  const profileBox = () => {
    if (isLoading) return <div></div>;
    if (user)
      return (
        <>
          {/* <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button> */}

          <Menu as="div" className="ml-3 relative">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="bg-gray-800 flex text-sm border-gray-400 border-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    {user?.profileImage?.location && (
                      <img
                        className="h-8 w-8 object-cover rounded-full"
                        src={user?.profileImage?.location}
                        alt=""
                      />
                    )}
                    {!user?.profileImage && <UserIcon className="h-6 w-6 rounded-full" />}
                  </Menu.Button>
                </div>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/profile">
                          <p
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </p>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/setting">
                          <p
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </p>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          onClick={signOut}
                          className={classNames(
                            active ? 'bg-gray-100' : '',
                            'cursor-pointer block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          Sign out
                        </p>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </>
      );
  };

  const mobileMenuBox = (open) => {
    if (isLoading) return <div></div>;

    if (!user)
      return (
        <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="sr-only">Open main menu</span>
          {open ? (
            <XIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
          )}
        </Disclosure.Button>
      );
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <Disclosure as="nav" className={`${isHidden ? 'hidden' : ''} bg-gray-800`}>
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                {mobileMenuBox(open)}
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/">
                    <p className="text-xl text-white cursor-pointer font-semibold">Clapper</p>
                  </NavLink>
                </div>
                <div className="hidden sm:block sm:ml-6">{navigationBox()}</div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {profileBox()}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
