import React, { useEffect, useState } from 'react';
import * as API from '@api';

/* TODO:
Complete the UserProvider to manage user data and phone number masking.
1. Fetch user data with API.me() on provider's mount.
2. Implement a function to toggle phone number masking (you can fetch unmasked phone number with API.phone()
3. Pass down the user data and the toggle function to the context value.
*/

export const UserContext = React.createContext(null);

export const UserProvider = ({children}) => {
  const [userData, setUserData] = useState({});

  const handlePhoneVisibilityToggle = async () => {
    if (! userData['unmasked_phone']) {
      const phoneNumber = await API.phone();    

      setUserData({...userData, ['unmasked_phone']: phoneNumber.phone});
    }
  };

  // On mount, load user information
  useEffect(() => {
    const fetchData = async () => {
      setUserData(await API.me());
    }

    fetchData();
  }, []);

  const context = {
    user: userData,
    togglePhoneNumber: handlePhoneVisibilityToggle
  }

  return (
    <UserContext.Provider value={context}>
      {children}
    </UserContext.Provider>
  )
};