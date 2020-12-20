import {addPanel, makeTags, getTags, showFeature, filterFunction, goodLayout} from './functions.js';

fetch('data.json')
.then(results => results.json())
.then(data => {
    console.log(data)
    main(data);
});

function main(data) {

    //Makes the sub-panels
    for (var i = 0; i < data.length; i++) {
        addPanel(i+1);
        addUser(i);
        getTags(i);
    }

    filterFunction();

    function addUser(i) {
        const topInfo = document.createElement('div');
        const photo = document.createElement('div');
        const name = document.createElement('div');
        const botInfo = document.createElement('div');
        const tags = document.createElement('ul');

        topInfo.className = 'topInfo';
        photo.className = 'logo';
        name.className = 'name';
        botInfo.className = 'botInfo';
        tags.className = 'tags';
        tags.setAttribute("id", "tags");

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
        var output = document.getElementById("user-" + id);

        var companyNode = document.createElement('p1');
        var newNode = document.createElement('p2');
        var featuredNode = document.createElement('p3');

        newNode.setAttribute("id", "new");
        featuredNode.setAttribute("id", "featured");

        name.innerHTML = position;

        photo.innerHTML = '<img src="'+logo+'">';

        botInfo.innerHTML = 
        postedAt + '&emsp;' +  '&#8226' + '&emsp;' + contract + '&emsp;' + 
        '&#8226' + '&emsp;' + location;

        // Panel layout
        companyNode.appendChild(document.createTextNode(company));
        newNode.appendChild(document.createTextNode('new!'));
        featuredNode.appendChild(document.createTextNode('featured'));

        output.appendChild(photo);
        output.appendChild(topInfo);
        topInfo.appendChild(companyNode);
        topInfo.appendChild(newNode);
        topInfo.appendChild(featuredNode);
        output.appendChild(name);
        output.appendChild(botInfo);
        output.appendChild(tags);

        makeTags(lst, tags);

        showFeature(isNew, isFeatured, i);
    }
    // Usefull 
    //console.log(document.getElementById("Frontend").getElementsByTagName("a")[0]);
    
}


// Only things left to do:
// -Hide panels when filtered : {@code showPanel}
// -Construct an efficient way to remove items form filter list : {@code filterFunction}
// -Add phone resize
// -Finish README.md