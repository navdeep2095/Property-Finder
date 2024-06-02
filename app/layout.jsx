import Navbar from '@/components/Navbar.jsx';
import '@/assets/styles/globals.css';
export const metadata = {
    type: 'Property details | find the right property',
    description: 'find your dream property',
    keywords: 'find rentals, properties, home, home sweet home'
}
const MainLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Navbar/>    
            <main>{children}</main>
        </body>
    </html>
  )
}

export default MainLayout