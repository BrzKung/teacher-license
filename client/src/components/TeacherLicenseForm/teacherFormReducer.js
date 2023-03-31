export const initialState = {
  citizenId: "",
  prefixName: "",
  firstName: "",
  lastName: "",
  prefixNameEng: "",
  firstNameEng: "",
  lastNameEng: "",
  licenseType: "",
  error: null,
};

export function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.field]: action.value, error: null };
    case "ERROR":
      return { ...state, error: action.message };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}
