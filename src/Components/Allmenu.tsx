import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

/* Components */
import SearchTextField from './SearchTextField';

interface AllmenuProps {
    onClose : () => void;
}

const Allmenu:React.FC<AllmenuProps> = ({onClose}) => {
    const [visible, setVisible] = useState(false);

    // mount 후 transition 시작
    useEffect(() => {
        setTimeout(() => setVisible(true), 10);
    }, []);

    const handleClose = () => {
        setVisible(false);
        setTimeout(() => {
            onClose(); // 부모 컴포넌트에서 isOpen false로
        }, 300); // transition-duration에 맞춤
    };

    return (
        <>
            <div className={`allMenuWrap ${visible ? 'show' : 'hide'}`}>
                <div className="allMenu">
                    <div className="allMenuHead">
                        <div className="head">
                            <Link to="#" className="btnAllMenuClose" onClick={handleClose}>전체메뉴 닫기</Link>
                        </div>
                        <div className="cont">
                            <SearchTextField type={'text'} placeholder={'검색어 입력'} />
                            <div className="allMainMenu">
                                <Link to="#" className="menu01">
                                    <span>견적 및<br />도입 문의</span>
                                </Link>
                                <Link to="#" className="menu02">
                                    <span>콘텐츠<br />센터</span>
                                </Link>
                                <Link to="#" className="menu03">
                                    <span>마이<br />페이지</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="allMenuCont">
                        <div className="allMenuArea">
                            <div className="allMenuDep">
                                <Link to="#" className="allMenu1Dep">제품</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep">메뉴</Link>
                                        <ul>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                        </ul>
                                    </div>
                                </div>
                             </div>
                            <div className="allMenuDep">
                                <Link to="#">서비스</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep">메뉴</Link>
                                        <ul>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="allMenuDep">
                                <Link to="#">솔루션</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep">메뉴</Link>
                                        <ul>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="allMenuDep">
                                <Link to="#">구매</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep">메뉴</Link>
                                        <ul>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="allMenuDep">
                                <Link to="#">고객지원</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep">메뉴</Link>
                                        <ul>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="allMenuDep">
                                <Link to="#">콘텐츠 센터</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep">메뉴</Link>
                                        <ul>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="allMenuDep">
                                <Link to="#">파트너</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep">메뉴</Link>
                                        <ul>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                            <li><Link to="#">메뉴</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Allmenu;