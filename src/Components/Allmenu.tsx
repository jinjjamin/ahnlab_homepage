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