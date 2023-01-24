import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useAuth } from 'hooks/use-auth';
import {removeUser} from 'store/slices/userSlice'
import { Login } from 'components/Login';

const HomePage = () => {
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();


    return isAuth ? (
        <div>
            <h1>Welcome</h1>
            <button
                onClick={()=> dispatch(removeUser())}
            >Log out from {email}</button>
        </div>
    ) : (
        <Link to = "/login">Login</Link>
    )
}

export default HomePage