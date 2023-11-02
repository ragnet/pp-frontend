import { useContext, useState } from 'react';
import { UserProvider, UserContext } from '../../providers/index';

import * as Theme from '@theme';

/* TODO:
1. Center Card component within the #home.
2. Display user's full name and their email. Use UserProvider's functionality (see providers.js)
3. Display user's masked phone number, and implement a way to unmask it. Use UserProvider's context.
*/

const cardStyle = {
  width: '30%',
  margin: '10px auto',
  padding: '10px',
  border: '1px black solid'
};

const Card = () => {
  const userProvider = useContext(UserContext);
  const user = userProvider.user;

  const [shouldShowPhone, setShouldShowPhone] = useState(false);

  const togglePhoneVisibility = () => {
    userProvider.togglePhoneNumber();
    setShouldShowPhone(! shouldShowPhone);
  };

  return (
    <div id="card" style={cardStyle}>
      <p><strong>{user.last_name}</strong>, {user.first_name}</p>
      <p>{user.email}</p>
      <p>{shouldShowPhone ? user.unmasked_phone : user.masked_phone}</p>
      <a href='#' onClick={togglePhoneVisibility}>{shouldShowPhone ? 'Hide' : 'Show'}</a>      
    </div>
  ); 
}

const homeStyle = {
  backgroundColor: Theme.colors.beige,
  width: '100vw',
  height: '100vh',
};

const Home = () => {
  return (
    <UserProvider>
      <div id="home" style={homeStyle}>
        <Card />
      </div>
    </UserProvider>
  );
}

export default Home;
