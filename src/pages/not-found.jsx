
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return <div>
        <h1>Not found <strong>☹</strong></h1>
        <p>Back to <Link to='/'>Home page...</Link></p>
    </div>
};

export default NotFoundPage;
