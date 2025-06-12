import {useState} from 'react';
import { Link } from 'react-router-dom';

/* Components */
import Allmenu from './Allmenu';

interface HeaderProps {
    logo? : boolean;
    pageTitle? : string;
}

const Header:React.FC<HeaderProps> = ({logo=false, pageTitle}) => {
    const [isOpen, setIsOpen] = useState(false);
    const allMenuHandler = ()=> {
        setIsOpen(true);
    }
    return (
        <>
            <header id="header">
                <div className="alignLeft">
                    {
                        logo ? (
                            <Link to="#" className="logo">
                                <span>로고</span>
                            </Link>
                        ) : (
                            <Link to="#" className="btnHeadPrev">
                                <span>이전페이지로 이동</span>
                            </Link>
                        )
                    }
                </div>
                <div className="alignCenter">
                    <div className="pageTitle">{pageTitle}</div>
                </div>
                <div className="alignRight">
                    <Link to="#" className="btnHeadAllmenu" onClick={()=> allMenuHandler()}>
                        <span>전체 메뉴</span>
                    </Link>
                </div>
            </header>
            {isOpen && (
                    <Allmenu onClose={() => setIsOpen(false)} />
                )
            }
        </>
    )
}

export default Header;