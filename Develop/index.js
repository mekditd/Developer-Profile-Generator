const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


const questions = [

];

function writeToFile(fileName, data) {

}

function init() {

    init();
}


// const pdfMaker = require("pdfkit");


inquirer.prompt([
    {
        type: "input",
        message: ("What is your Github user name?"),
        name: "username",
    },

    // {
    //     type: "list",
    //     message: ("What is your favorite color?"),
    //     choices: ["pink", "blue", "pink", "red"],
    //     name: "favoriteColor",

    // }
])

    .then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
        console.log(queryUrl);
        axios.get(queryUrl).then(function ({ data }) {
            const repoNames = data.map((repo) => repo.name);
        })

            .then(function ({ data }) {
                const follower = data.map((followers) => followers.id);
                console.log(follower);
                // });




                fs.writeFile("repos.txt", repoNamesStr, function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log()
                    console.log(`Saved ${repoNames.length} repos`);
                });
            });
    })
