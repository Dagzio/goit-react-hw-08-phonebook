export const selectContacts = state => state.contacts.items;

export const selectFilterValue = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectIsLoggedIn = state => state.userReducer.isLoggedIn;
