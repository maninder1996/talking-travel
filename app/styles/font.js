import { Changa_One, Roboto } from 'next/font/google';
 
 const changane = Changa_One({
  subsets: ['latin'],
  variable: '--font-Changa',
  weight: ["400"],
});
 
 const roboto = Roboto({
  subsets: ['latin'],
  weight: ["400", "500",  "700",],
  variable: '--font-roboto',
});

export { changane, roboto};