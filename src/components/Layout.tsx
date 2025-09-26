import Header from './Header.tsx';
import Footer from './Footer.tsx';






interface LayoutProps {
    children: React.ReactNode;
}






const Layout:({children}:LayoutProps) => Element = () : Element => {
    return(
        <>
            { /*Header*/}
          < Header />
            <div className="container mx-auto pt-24 min-h-[95vh]">
            </div>

            {children}




          < Footer />
            {/*children*/}



        </>
    )
}
export default Layout;