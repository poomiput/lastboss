import './globals.scss';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'PathFinder | Logistics Career Growth',
  description:
    'Career matching และแผนพัฒนาศักยภาพสำหรับพนักงานองค์กรโลจิสติกส์ ตั้งแต่ฝ่ายคลังจนถึงฝ่ายบริหาร',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
