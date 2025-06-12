import { Link } from 'react-router-dom';

/* Components */
import TextField from './TextField';

interface SearchTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type : string;
}


const SearchTextField:React.FC<SearchTextFieldProps> = ({type, ...rest}) => {
    return (
        <>
           <TextField type={type} {...rest}/>
        </>
    )
}

export default SearchTextField;