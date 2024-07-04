import { FC } from 'react';
import logo from '/metlife_logo.svg';
import account from '@assets/account.svg';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
}

export const Header: FC<HeaderProps> = ({ user }) => (
  <header>
    <div className='storybook-header'>
      <img src={logo} />
      <div className='flex-col justify-center h-[30px]'>
        <img src={account} />
        <span className='text-[24px]'>{user?.name}</span>
      </div>
    </div>
  </header>
);
