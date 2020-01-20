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
    .prompt({
        message: "Enter your GitHub username",
        name: "username"
    })

    
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
