import { Link } from 'react-router-dom';

/* Components */
import Button from './Button';
import IconButton from './IconButton';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="footerMenu">
                    <Link to="#">회사소개</Link>
                    <Link to="#">투자정보</Link>
                    <Link to="#">채용정보</Link>
                    <Link to="#">Contact Us</Link>
                </div>
                <Button text="뉴스레터 구독신청" style="contain" size="big" color="blue" full={true} />
                <div className="htmlBanner"><img src="/public/images/_temp/img_html_banner.svg" alt="" style={{width : "100%"}} /></div>
                <div className="footerIconBtnGroup">
                    <IconButton text="카카오 채널" type="kakao" />
                    <IconButton text="페이스북" type="facebook" />
                    <IconButton text="링크드인" type="linkedIn" />
                    <IconButton text="유튜브" type="youtube" />
                </div>
                <div className="footerTermMenu">
                    <Link to="#">사용권 약관</Link>
                    <Link to="#" className="bold">개인정보처리방침</Link>
                    <Link to="#">이용약관</Link>
                </div>
                <select className="familySite">
                    <option value="">Family Site</option>
                    <option value="">AhnLab Mall</option>
                    <option value="">SMB Place</option>
                    <option value="">V3 365 클리닉</option>
                    <option value="">MyCompany(ELS)</option>
                    <option value="">Ahnlab Cloud</option>
                </select>
                <div className="footerText">
                    <p>대표이사 : 강석균</p>
                    <p>사업자등록번호 : 214-81-83536</p>
                    <p>(우)13493 경기도 성남시 분당구 판교역로 220</p>
                    <p>통신판매신고번호 : 2012-경기성남-1189</p>
                    <p>대표전화 : 031-722-8000</p>
                    <p>Fax : 031-722-8901</p>
                    <p>© AhnLab, Inc. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;