import { Link } from 'react-router-dom';

interface ButtonProps {
    style : string;
    text : string;
    link? : string;
    size : string;
    full? : boolean;
    color : string;
}

const Button:React.FC<ButtonProps> = ({style, link="#", text, size, color, full=false}) => {
    return (
        <>
           <Link to={link} className={[
                "btn" ,
                style === "contain" ? "contain" : style === "outline" ? "outline" :  style === "text" && "text"  ,
                size === "big" ? "big" : size === "middle" ? "md" : size === "small" && "sm",
                color === "blue"  ? "blue" : color === "gray" ? "gray" : color === "white" && "white",
                full && "full",
            ].join(" ")}>
                <span>{text}</span>
           </Link>
        </>
    )
}

export default Button;