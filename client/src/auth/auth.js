import auth0 from 'auth0-js';
import history from "../history";

export default class Auth {
    constructor() {
        this.getProfile = this.getProfile.bind(this);
    };

    auth0 = new auth0.WebAuth({
        domain: 'rentplace.auth0.com',
        clientID: 'v0W04Kiqx2m672ihXU3w5C4KWLclXCx4',
        redirectUri: 'https://rent-place.herokuapp.com/callback',
        audience: 'https://rentplace.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: "openid profile"
    });

    userProfile;

    login() {
        this.auth0.authorize();
    };

    getAccessToken() {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('No Access Token found');
        }
        return accessToken;
    };

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
            history.replace('/home');
        } else if (err) {
            history.replace('/home');
            console.log(err);
        }
        });
    };

    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        history.replace('/home');
    };

    logout() {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/home');
    };

    isAuthenticated() {
        // Check whether the current time is past the 
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    };

    getProfile(cb) {
        let accessToken = this.getAccessToken();
        this.auth0.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
            this.userProfile = profile;
            }
        cb(err, profile);
        });
    };
}