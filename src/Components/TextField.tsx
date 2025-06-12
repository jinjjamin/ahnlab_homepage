import { Link } from 'react-router-dom';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type : string;
    className? : string;
}

const TextField:React.FC<TextFieldProps> = ({type, className, ...rest}) => {
    return (
        <>
           <input type={type} {...rest} className={["inpText",  className].join(" ")} />
        </>
    )
}

export default TextField;