require("dotenv").config();
var request = require('request');


exports.registerAcc = (req, res, next) => {

    const email = req.body.email,
        password = "7069C1AA60B799D08926F09E0A509010";

    var preferences = {
        "privacy.privacyWFF.isConsentGranted": Boolean(req.body.privacyWFF),
        'PromotionCommunicationSMS.isConsentGranted': Boolean(req.body.PromotionCommunicationSMS),
        'PromotionCommunicationEmail.isConsentGranted': Boolean(req.body.PromotionCommunicationEmail)
    }

    var profile = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName
    }

    var data = {
        "oldMemberID": req.body.oldMemberID,
        "firstOrderDate": req.body.firstOrderDate,
        "customerPOS": req.body.customerPOS,
        "customerPOS_ID": req.body.customerPOS_ID,
        "IDStore": req.body.IDStore
    }

    preferences = JSON.stringify(preferences);
    profile = JSON.stringify(profile);
    data = JSON.stringify(data);


    var options = {
        'method': 'POST',
        'url': 'https://proxy-staging.wildforkfoods.com/https://accounts.us1.gigya.com/accounts.register',
        'headers': {
            'origin': 'postman',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
            'apiKey': '3_5HwwlN7sEzXGi4yuj8KUxmVlbi0VjIiL60R8JQMLWYtOmr_NRYtu26sDV9PPZre-',
            'userKey': 'ANqsG9U/FqR4',
            'secret': 'AKoDGn3HQx+AdMgwKEqogPqdu1FFYp5b',
            'email': email,
            'password': password,
            'preferences': preferences,
            'profile': profile,
            'data': data
        }
    };
    request(options, function (error, response) {
        if (error) {
            res.status(response.statusCode).send(error);
            throw new Error(error);
        }

        res.status(response.statusCode).send(JSON.parse(response.body));
    });
}