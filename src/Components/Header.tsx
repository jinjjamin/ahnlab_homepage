import { Link } from 'react-router-dom';

interface HeaderProps {
    logo? : boolean;
    pageTitle? : string;
}

const Header:React.FC<HeaderProps> = ({logo=false, pageTitle}) => {
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
                    <Link to="#" className="btnHeadAllmenu">
                        <span>전체 메뉴</span>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header;