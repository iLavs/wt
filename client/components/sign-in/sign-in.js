
Template.SignIn.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
            else {
                Router.go('/sign-up');
            }
        });
    }
})