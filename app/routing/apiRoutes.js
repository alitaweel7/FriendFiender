let friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        let match = "";
        let userData = req.body;
        let userName = userData.name;
        let userScore = userData.scores.map(Number).reduce((a, b) => a + b, 0);

        //push users information into friends array


        //for loop over friends array
        for (let i = 0; i < friends.length; i++) {
            //finding friend score
            let fName = friends[i].name;
            let totalScore = friends[i].scores.map(Number).reduce((a, b) => a + b, 0);
            if (fName === friends[i].name) {
                friends[i].totalScore = totalScore;
            }


        }

        // console.log(userName, userScore);


        for (let j = 0; j < friends.length; j++) {

            let diff = [Math.abs(userScore - friends[j].totalScore)];

            // console.log(diff);

            if (diff <= 2) {
                // console.log(friends[j].name);
                match = friends[j].name;
                return match
            }



            console.log(match);
        }
        res.json(friends);
    });
};
