function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        // show login and hide logout
        $("#btn-login").show();
        $("#btn-logout").hide();
        $("#data").html("User logged off");
        console.log('User signed out.');
    });
}
function onSignIn(googleUser) {
    profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    var data = $('<div/>');
    data.append($('<div/>').html("Id: " + profile.getId()));
    data.append($('<br/>'));
    data.append($('<div/>').html("Name: " + profile.getName()));
    data.append($('<br/>'));
    data.append($('<div/>').html("Email: " + profile.getEmail()));
    data.append($('<br/>'));
    data.append($('<div/>').html('<img src="' + profile.getImageUrl() + '" alt="Ad Image Preview" height="200" width="200">'));
    // Appending the header to the table 
    $("#data").html(data);

    // hide login and show logout
    $("#btn-login").hide();
    $("#btn-logout").show();
}