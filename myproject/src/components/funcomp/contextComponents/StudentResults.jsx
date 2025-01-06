import {useContext} from 'react';
import {ThemeProvider} from '../Usecontext';

var StudentResults= () =>{
    var result = useContext(ThemeProvider);
    return(
        <section>
            <h3>your result is {result.sgpa}and{result.cgpa}</h3>
        </section>
    )
}
export default StudentResults;