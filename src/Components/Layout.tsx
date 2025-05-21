
/* Components */
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children : React.ReactNode;
    pageTitle? : string;
    logo? : boolean;
}

const Layout:React.FC<LayoutProps> = ({children, pageTitle, logo}) => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
        const vh = window.innerHeight;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    });

    return (
        <>
            <Header pageTitle={pageTitle} logo={logo} />
            <div className="container">
                <div id="contents">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Layout;