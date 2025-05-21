import { Link } from 'react-router-dom';

interface IconButtonProps {
    text : string;
    link? : string;
    type : string;
}

const IconButton:React.FC<IconButtonProps> = ({link="#", text, type}) => {
    return (
        <>
           <Link to={link} className={[
                "iconBtn" ,
                type
            ].join(" ")}>
                <span>{text}</span>
           </Link>
        </>
    )
}

export default IconButton;