import { Link } from 'react-router-dom';

/* Components */
import TextField from './TextField';

interface SearchTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    type : string;
}


const SearchTextField:React.FC<SearchTextFieldProps> = ({type, ...rest}) => {
    return (
        <>
            <div className="searchTextFieldArea">
                <TextField type={type} {...rest}/>
                <Link to="#" className="btnSearch">검색</Link>
           </div>
        </>
    )
}

export default SearchTextField;