const questions = [

];

function writeToFile(fileName, data) {

}

function init() {

    init();
}

const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const pdfMaker = require("pdfkit");

inquirer
inquirer.prompt([
    {
        type: "input",
        message: ("What is your Github user name?"),
        name: "userName",
    },

    {
        type: "rawlist",
        message: ("What is your favorite color?"),
        choices: ["pink", "blue", "pink","red"],
        name: "favoriteColor",

    }
])

    .then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
        console.log(queryUrl);
        axios.get(queryUrl).then(function ({ data }) {
            const repoNames = data.map(function (repo) {
                return repo.name;
            });

            const repoNamesStr = repoNames.join("\n");
            const filename = "repos.txt";



            fs.writeFile("repos.txt", repoNamesStr, function (err) {
                if (err) {
                    throw err;
                }

                console.log(`Saved ${repoNames.length} repos`);
            });
        });
    });


const questions = []



    .then(function (response) {
        console.log(response);
        fs.writeFile(response.username + ".JSON",
            JSON.stringify(response, null, 2),
            function (err) {

                if (err) {
                    console.log(err);
                } else {
                    console.log("success!");
                }
            });
    });
