const db = require("../models");
const asyncLoop = require("node-async-loop");
const userFeedback = db.user_feedbacks;
const userFeedbackDetails = db.user_feedback_detailes;
module.exports = {
  create: (req, res) => {
    function createFeedback(input, data, res) {
      console.log(data)
      asyncLoop(
        input.userFeedback,
        function (item, next) {
            console.log(item);
          const finalPrepareJSON = {
            query: item.query,
            userAnswer: item.userAnswer,
            feedbackId: data.id,
          };
          console.log(data)
          console.log(finalPrepareJSON);
          console.log("dddd");
          userFeedbackDetails
            .create(finalPrepareJSON)
            .then((data) => {
              next();
            })
            .catch((e) => {
              if (e) {
                next(e);
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
        console.log(data);
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
  retrive: (req, res) => {
    console.log( req.body.userId)
    userFeedback.findAll({
      where: {
        categoryId: req.body.categoryId,
        userId: req.body.userId,
      },
      include: [{
        model: userFeedbackDetails
      }]
    })
      .then(function (queryResult) {
        res.send(queryResult);
      })
      .catch(function (error) {
        res.send(error);
      });
  },
};
