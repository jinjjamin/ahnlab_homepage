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

    const [isDep2State , setIsDep2State] = useState<{ [key: number]: boolean }>({});
    const dep2Handler = (index : number)=> {
        setIsDep2State((prev) => ({
            ...prev,
            [index]: !prev[index], // 해당 인덱스만 토글
        }));
    }

    const menuList01 = [
        {
            name : 'AhnLab Endpoint PLUS',
            url : '#'
        },
        {
            name : '안티멀웨어',
            url : '#'
        },
        {
            name : '엔드포인트 보호 플랫폼 (EPP)',
            url : '#'
        },
        {
            name : '지능형 위협 대응',
            url : '#'
        },
        {
            name : '엔드포인트 탐지 & 대응 (EDR)',
            url : '#'
        },
        {
            name : '중소기업 보안',
            url : '#'
        },
        {
            name : '모바일 보안',
            url : '#'
        }
    ]

    const menuList02 = [
        {
            name : 'AhnLab Endpoint PLUS',
            url : '#'
        },
        {
            name : '안티멀웨어',
            url : '#'
        },
        {
            name : '엔드포인트 보호 플랫폼 (EPP)',
            url : '#'
        },
        {
            name : '지능형 위협 대응',
            url : '#'
        },
        {
            name : '엔드포인트 탐지 & 대응 (EDR)',
            url : '#'
        },
        {
            name : '중소기업 보안',
            url : '#'
        },
        {
            name : '모바일 보안',
            url : '#'
        }
    ]

    const menuList03 = [
        {
            name : 'AhnLab Endpoint PLUS',
            url : '#'
        },
        {
            name : '안티멀웨어',
            url : '#'
        },
        {
            name : '엔드포인트 보호 플랫폼 (EPP)',
            url : '#'
        },
        {
            name : '지능형 위협 대응',
            url : '#'
        },
        {
            name : '엔드포인트 탐지 & 대응 (EDR)',
            url : '#'
        },
        {
            name : '중소기업 보안',
            url : '#'
        },
        {
            name : '모바일 보안',
            url : '#'
        }
    ]

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
                            <div className="allMenuDep on">
                                <Link to="#" className="allMenu1Dep">제품</Link>
                                <div className="allMenu2DepList">
                                    <div className={`allMenu2DepItem ${isDep2State[1]  ? "on" : ""}`}>
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(1)}>AhnLab Endpoint PLUS</Link>
                                        {
                                            isDep2State[1] && (
                                                <ul>
                                                    {
                                                        menuList01.map(({name, url})=>
                                                            <li key={name}>
                                                                <Link to={url}>{name}</Link>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(2)}>AhnLab Network PLUS</Link>
                                        {
                                            isDep2State[2] && (
                                                <ul>
                                                     {
                                                        menuList02.map(({name, url})=>
                                                            <li key={name}>
                                                                <Link to={url}>{name}</Link>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(3)}>AhnLab Cloud PLUS</Link>
                                        {
                                            isDep2State[3] && (
                                                <ul>
                                                    {
                                                        menuList03.map(({name, url})=>
                                                            <li key={name}>
                                                                <Link to={url}>{name}</Link>
                                                            </li>
                                                        )
                                                    }
                                                </ul>
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(4)}>AhnLab Connect PLUS</Link>
                                        {
                                            isDep2State[4] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(5)}>AhnLab CPS PLUS</Link>
                                        {
                                            isDep2State[5] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep">전체 제품 및 서비스</Link>
                                    </div>
                                </div>
                             </div>
                            <div className="allMenuDep">
                                <Link to="#" className="allMenu1Dep">서비스</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(6)}>메뉴</Link>
                                        {
                                            isDep2State[6] && (
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
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="allMenuDep">
                                <Link to="#" className="allMenu1Dep">솔루션</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(12)}>메뉴</Link>
                                        {
                                            isDep2State[12] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(13)}>메뉴</Link>
                                        {
                                            isDep2State[13] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(14)}>메뉴</Link>
                                        {
                                            isDep2State[14] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(15)}>메뉴</Link>
                                        {
                                            isDep2State[15] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(16)}>메뉴</Link>
                                        {
                                            isDep2State[16] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(17)}>메뉴</Link>
                                        {
                                            isDep2State[17] && (
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
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="allMenuDep">
                                <Link to="#" className="allMenu1Dep">구매</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(18)}>메뉴</Link>
                                        {
                                            isDep2State[18] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(19)}>메뉴</Link>
                                        {
                                            isDep2State[19] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(20)}>메뉴</Link>
                                        {
                                            isDep2State[20] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(21)}>메뉴</Link>
                                        {
                                            isDep2State[21] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(22)}>메뉴</Link>
                                        {
                                            isDep2State[22] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(23)}>메뉴</Link>
                                        {
                                            isDep2State[23] && (
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
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="allMenuDep">
                                <Link to="#" className="allMenu1Dep">고객지원</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(24)}>메뉴</Link>
                                        {
                                            isDep2State[24] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(25)}>메뉴</Link>
                                        {
                                            isDep2State[25] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(26)}>메뉴</Link>
                                        {
                                            isDep2State[26] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(27)}>메뉴</Link>
                                        {
                                            isDep2State[27] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(28)}>메뉴</Link>
                                        {
                                            isDep2State[28] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(29)}>메뉴</Link>
                                        {
                                            isDep2State[29] && (
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
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="allMenuDep">
                                <Link to="#" className="allMenu1Dep">콘텐츠 센터</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(30)}>메뉴</Link>
                                        {
                                            isDep2State[30] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(31)}>메뉴</Link>
                                        {
                                            isDep2State[31] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(32)}>메뉴</Link>
                                        {
                                            isDep2State[32] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(33)}>메뉴</Link>
                                        {
                                            isDep2State[33] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(34)}>메뉴</Link>
                                        {
                                            isDep2State[34] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(35)}>메뉴</Link>
                                        {
                                            isDep2State[35] && (
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
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="allMenuDep">
                                <Link to="#" className="allMenu1Dep">파트너</Link>
                                <div className="allMenu2DepList">
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(36)}>메뉴</Link>
                                        {
                                            isDep2State[36] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(37)}>메뉴</Link>
                                        {
                                            isDep2State[37] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(38)}>메뉴</Link>
                                        {
                                            isDep2State[38] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(39)}>메뉴</Link>
                                        {
                                            isDep2State[39] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(40)}>메뉴</Link>
                                        {
                                            isDep2State[40] && (
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
                                            )
                                        }
                                    </div>
                                    <div className="allMenu2DepItem">
                                        <Link to="#" className="allMenu2Dep" onClick={()=> dep2Handler(41)}>메뉴</Link>
                                        {
                                            isDep2State[41] && (
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
                                            )
                                        }
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