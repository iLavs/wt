Accounts.onCreateUser((options, user ) => {

        let facebookService = user.services.facebook;
console.log(options);
console.log(user);
        if (facebookService) {
            user.profile = {
                "firstName": facebookService['first_name'],
                "lastName": facebookService['last_name'],
                "email": '',
                "phone": '',
                "birthday": '',
                "startedSkatingYear": '',
                "zipCode":''
            };
        }

    return user;
});

