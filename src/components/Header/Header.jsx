import Navigation from 'components/Navigation/Navigation';
import { CurrentUser, Headerbar, HeaderLink, UserName } from './Header.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectCurrentUser } from 'redux/selectors';
import { userLogOut } from 'redux/user/userOperations';

const Header = () => {
  const stateIsLoggedIn = useSelector(selectIsLoggedIn);
  const stateCurrentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  return (
    <Headerbar>
      <nav>
        <HeaderLink to={'/'}>Home</HeaderLink>

        <HeaderLink to={'contacts'}>My Contacts</HeaderLink>
      </nav>
      {stateIsLoggedIn ? (
        <CurrentUser>
          <UserName>Hello, {stateCurrentUser?.name}</UserName>
          <button type="button" onClick={() => dispatch(userLogOut())}>
            Log Out
          </button>
        </CurrentUser>
      ) : (
        <Navigation />
      )}
    </Headerbar>
  );
};

export default Header;
