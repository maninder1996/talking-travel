import { Changa_One, Roboto } from '@nextui-org/font';

const changane = Changa_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-Changa',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export { changane, roboto };
