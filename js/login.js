function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        // callback
    });
}
function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
    console.log('Email: ' + profile.getEmail());
    // callback
}