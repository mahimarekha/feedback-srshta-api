const db = require("../models");
const asyncLoop = require("node-async-loop");
const Rating = db.rating;
const customerRating = db.customerratingrel;
const QAMODAL = db.qa;
module.exports = {
  create: (req, res) => {
    const userQuery = req.body.queryList;
    asyncLoop(
      userQuery,
      function (item, next) {
        const finalPrepareJSON = {
          ratingTypeId: req.body.ratingType,
          queryName: item.query,
          categoryId: req.body.categoryId,
          queryOptions: item.optionsList && item.optionsList.toString(),
          userId: req.body.userId,
        };
        QAMODAL.create(finalPrepareJSON)
          .then((data) => {
            next();
          })
          .catch((e) => {
            if (err) {
              next(err);
              return;
            }
          });
      },
      function (err) {
        if (err) {
          res.status(500).send("Registartion has failed, try again.");
          return;
        }
        res.status(200).send("Query Created successfully.");
      }
    );
  },
  getuser: (req, res) => {
    QAMODAL.findAll({
      where: {
        userId: req.body.userId,
        ratingTypeId: req.body.ratingType,
        categoryId: req.body.categoryId,
      },
    })
      .then(function (queryResult) {
        res.send(queryResult);
      })
      .catch(function (error) {
        res.send(error);
      });
  },
};
