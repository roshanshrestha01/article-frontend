import { createSelector } from 'reselect';

const selectAuth = (state) => state.auth;

const makeSelectUsername = () => createSelector(
  selectAuth,
  (authState) => authState.user.email
);

const makeSelectToken = () => createSelector(
  selectAuth,
  (authState) => authState.user.auth_token
);

const makeSelectGoingEvents = () => createSelector(
  selectAuth,
  (authState) => {
    if (authState !== undefined) {
      return authState.user.going_events;
      // return authState.get('user')
      //   .get('email');
    }
  },
);

const makeSelectUserLoggedIn = () => createSelector(
  selectAuth,
  (authState) => {
    authState = authState.toJS();
    return authState.user.isLoggedIn;
  },
);

const makeSelectAuthLoading = () => createSelector(
  selectAuth,
  (authState) => authState.authLoading,
);


export {
  selectAuth,
  makeSelectGoingEvents,
  makeSelectToken,
  makeSelectAuthLoading,
  makeSelectUserLoggedIn,
};
