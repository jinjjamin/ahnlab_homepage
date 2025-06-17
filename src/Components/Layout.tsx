import {useEffect} from 'react';

/* Components */
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children : React.ReactNode;
    pageTitle? : string;
    logo? : boolean;
}

const Layout:React.FC<LayoutProps> = ({children, pageTitle, logo}) => {
    useEffect(() => {
        const vh = window.innerHeight;
        const footer = document.querySelector('#footer') as HTMLDivElement || null;
        const contents = document.querySelector('#contents') as HTMLDivElement || null;

        document.documentElement.style.setProperty("--vh", `${vh}px`);
        if(footer && contents){
            contents.style.minHeight = `${vh - footer.clientHeight}px`;
        }

        window.addEventListener("resize", () => {
            const vh = window.innerHeight;
            const footer = document.querySelector('#footer') as HTMLDivElement || null;
            const contents = document.querySelector('#contents') as HTMLDivElement || null;

            document.documentElement.style.setProperty("--vh", `${vh}px`);
            if(footer && contents){
                contents.style.minHeight = `${vh - footer.clientHeight}px`;
            }
        });

        document.addEventListener('scroll' , ()=> {
            if(window.scrollY >= 10){
                document.querySelector('#header')?.classList.add('scroll-header');
            }
            else{
                document.querySelector('#header')?.classList.remove('scroll-header');
                console.log('하이');
            }
        })
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