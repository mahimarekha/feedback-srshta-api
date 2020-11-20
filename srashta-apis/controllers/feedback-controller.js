const db = require("../models");
const asyncLoop = require("node-async-loop");
const userFeedback = db.user_feedbacks;
const userFeedbackDetails = db.user_feedback_detailes;
module.exports = {
  create: (req, res) => {
    function createFeedback(input, data, res) {
      asyncLoop(
        input.userFeedback,
        function (item, next) {
            console.log(item);
          const finalPrepareJSON = {
            query: item.query,
            userAnswer: item.userAnswer,
            feedbackId: data.id,
          };
          userFeedbackDetails
            .create(finalPrepareJSON)
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
    }
    console.log(req.body);
    userFeedback
      .create(req.body)
      .then((data) => {
        if (data) {
          createFeedback(req.body, data, res);
          //res.status(200).send(data)
        }
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send("feedback has failed, try again.");
      });
  },
  getrating: (req, res) => {
    QAMODAL.findAll({
      where: {
        userId: req.body.userId,
        ratingTypeId: req.body.ratingType,
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
