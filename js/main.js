import {addPanel, makeTags, showFeature, filterBtns, getTags, onResize} from './functions.js';

fetch('data.json')
.then(results => results.json())
.then(data => {
    main(data);
});

/**
 * Main function to run all scripts from.
 * @param {*} data the json data to take info from.
 */
function main(data) {
    //Makes the sub-panels
    for (var i = 0; i < data.length; i++) {
        addPanel(i);
        addUser(i, data);
        getTags(i);
    }

    filterBtns();
}

/**
 * Gathers all user information from given json list and
 * generates all elements with appropriate ids and classnames.
 * @param {*} i which user to gather info from.
 * @param {*} data the json data to take info from.
 */
function addUser(i, data) {
    // Defining all elements for each user
    const topInfo = document.createElement('div');
    const photo = document.createElement('div');
    const name = document.createElement('div');
    const botInfo = document.createElement('div');
    const tags = document.createElement('ul');
    const line = document.createElement('hr');

    // Adding id and/or classname to each element
    topInfo.className = 'topInfo';
    photo.className = 'logo';
    name.className = 'name';
    botInfo.className = 'botInfo';
    tags.className = 'tags';
    tags.setAttribute("id", "tags");
    line.setAttribute("class", "line");
    line.setAttribute("style", "display: none;");

    // Defining variables for each variable in data.json
    var id = data[i].id;
    id = id.toString();
    var company = data[i].company;
    var contract = data[i].contract;
    var isFeatured = data[i].featured;
    var languages = data[i].languages;
    var level = data[i].level;
    var location = data[i].location;
    var logo = data[i].logo;
    var isNew = data[i].new;
    var position = data[i].position;
    var postedAt = data[i].postedAt;
    var role = data[i].role;
    var tools = data[i].tools;
    var str = level + ',' + role + ',' + languages + ',' + tools;
    var lst = str.split(",")
    lst = lst.filter(item => item);

    // Defining nodes for user and sub-nodes in user
    var output = document.getElementById("user-" + id);
    var companyNode = document.createElement('p1');
    var newNode = document.createElement('p2');
    var featuredNode = document.createElement('p3');

    // Adding ids to new and feature node
    newNode.setAttribute("id", "new");
    featuredNode.setAttribute("id", "featured");

    // Adding html text in each element
    name.innerHTML = position;
    photo.innerHTML = '<img src="'+logo+'">';
    botInfo.innerHTML = 
    postedAt + '&emsp;' +  '&#8226' + '&emsp;' + contract + '&emsp;' + 
    '&#8226' + '&emsp;' + location;

    // Layout of the panels
    companyNode.appendChild(document.createTextNode(company));
    newNode.appendChild(document.createTextNode('new!'));
    featuredNode.appendChild(document.createTextNode('featured'));

    // Layout of each user
    output.appendChild(photo);
    output.appendChild(topInfo);
    topInfo.appendChild(companyNode);
    topInfo.appendChild(newNode);
    topInfo.appendChild(featuredNode);
    output.appendChild(name);
    output.appendChild(botInfo);
    output.appendChild(tags);
    output.appendChild(line);
        
    // Attaching the event listener to window's resize function onResize
    window.addEventListener("resize", function() {
        onResize(line);
    });

    // Run onResize for first page load
    onResize(line);

    // Adds id and clasname to each tag
    makeTags(lst, tags);

    // Changes display of the new and feature tag
    showFeature(isNew, isFeatured, i);
}
