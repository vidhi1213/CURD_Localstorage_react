import{
    CREATE_CONTACT,
    DELETE_CONTACT,
    UPDATE_CONTACT,
    UPDATE_INDEX,
    EDIT_USER

} from '../constant/type';

export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact,
  });

  export const deleteContact = (user) => ({
    type: DELETE_CONTACT,
    payload: user,
  });

  // export const updateContact = (contact) => ({
  //   type: UPDATE_CONTACT,
  //   payload: contact,
  // });
  export const EditUser = (user) => ({
    type: EDIT_USER,
    payload: user,
  });
  
  export const updateIndex = (data) => {
    return {
      type: UPDATE_INDEX,
      payload: data,
    };
  };