const db = require("../models");
const Registration = db.registration;
const saltRounds = 10;
const bcrypt = require('bcrypt');
module.exports = {
    create: (req, res) => {
        console.log(req.body);
        if (req.body.businessName && req.body.address && req.body.buildingName && req.body.areaLocalaity &&
            req.body.city && req.body.pinNo && req.body.entityType && req.body.primaryName && req.body.primaryEmail &&
            req.body.primaryDesignation && req.body.secondaryName && req.body.secondaryMobile && req.body.secondaryEmail &&
            req.body.secondaryDesignation && req.body.password
        ) {
            Registration.findAll({
                where: {
                    primaryEmail: req.body.primaryEmail
                }
            }).then(result => {
                if (result && result.length === 0) {
                    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                        if (hash) {
                            req.body.password = hash;
                            Registration.create(req.body)
                                .then(data => {
                                    if (data) {
                                        res.status(200).send('User registered successfully.')
                                    }
                                }).catch(e => {
                                    console.log(e)
                                    res.status(500).send('Registartion has failed, try again.')
                                })
                        } else {
                            res.status(500).send('Something went wrong.');
                        }
                    })
                } else {
                    res.status(400).send('User already registerd.');
                }
            }).catch(e => {
                console.log(e);
            })
        } else {
            res.status(400).send('Required parameters are missing.');
        }
    },
    login: async (req, res) => {
        if (req.body.password && req.body.userName) {
            // console.log(req.body)
            Registration.findAll({
                where:{
                    primaryEmail: req.body.userName,
                }
            }).then(data => {
                bcrypt.compare(req.body.password, data[0].password, function (err, result) {
                    if (result === true) {
                        const userData = {
                            primaryEmail: data[0].primaryEmail,
                            primaryName: data[0].primaryName,
                            address: data[0].address,
                            id: data[0].id,
                        };
                        res.status(200).send({
                            result: [userData],
                            message: 'Login successfull',
                        });
                    } else {
                        res.send({
                            message: 'Please enter valid details'
                        })
                    }
                });
            }).catch(e => {
                console.log(e, 'errr')
                res.status(400).send({
                    message: 'User has not registered, please register.'
                })
            })
        } else {
            res.send({
                message: 'Please enter valid details'
            })
        }
    }
}