const process = require("process");
const fs = require("fs");
const axios = require("axios");

// Example of how to read the process arguments
// Will be needed to read the name of the consuming repo in future
process.argv.slice(2).forEach(function(arg) {
    console.log(arg);
});

fs.readFile('./bin/dependencies.json', 'utf8', (err, data) => {
    if (err) {
        console.log("-------------- Error --------------");
        console.log(err);
    }
    else {
        console.log("------------- Listing the dependencies ------------");
        const dependenciesList = JSON.parse(data).dependencies;
        for (let dependency in dependenciesList) {
            if (dependenciesList.hasOwnProperty(dependency)) {
                // Do things here
                console.log(dependency);
            }
        }

        // Grab the release information of dependencies
        // To begin with let's get info of carbon-graphs
        axios
            .get("https://api.github.com/repos/cerner/carbon-graphs/releases")
            .then((response) => {
                const releases = response.data;
                const latestRelease = releases.find(
                    release => !release.prerelease && !release.draft
                );
                console.log(latestRelease.tag_name);
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
let a = "inside a javascript file";
console.log(a);
