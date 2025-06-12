import {useState} from 'react';
import { Link } from 'react-router-dom';

/* Components */
import SearchTextField from './SearchTextField';

interface AllmenuProps {
    onClose : () => void;
}

const Allmenu:React.FC<AllmenuProps> = ({onClose}) => {
    return (
        <>
            <div className="allMenuWrap">
                <div className="allMenu">
                    <div className="allMenuHead">
                        <div className="head">
                            <Link to="#" className="btnAllMenuClose" onClick={onClose}>전체메뉴 닫기</Link>
                        </div>
                        <div className="cont">
                            <SearchTextField type={'text'} placeholder={'검색어 입력'} />
                        </div>
                    </div>
                    <div className="allMenuCont">

                    </div>
                </div>
            </div>
        </>
    )
}

export default Allmenu;