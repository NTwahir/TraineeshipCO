fetch('data.json')
.then(results => results.json())
.then(data => {
    console.log(data)

    const topInfo = document.createElement('div');
    const photo = document.createElement('div');
    const name = document.createElement('div');
    const botInfo = document.createElement('div');
    const tags = document.createElement('div');


    topInfo.className = 'topInfo';
    photo.className = 'logo';
    name.className = 'name';
    botInfo.className = 'botInfo';
    tags.className = 'tags';


    var i = 0;
    var id = data[i].id;

    var company = data[i].company;
    var contract = data[i].contract;
    var isFeatured = data[i].feature;
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
    var output = document.getElementById("user");

    var companyNode = document.createElement('p1');
    var companyText = document.createTextNode(company);
    var newNode = document.createElement('p2');
    var newText = document.createTextNode('new!');
    var featuredNode = document.createElement('p3');
    var featuredText = document.createTextNode('featured');

    name.innerHTML = position;

    photo.innerHTML = '<img src="'+logo+'">';

    botInfo.innerHTML = 
    postedAt + '&emsp;' +  '&#8226' + '&emsp;' + contract + '&emsp;' + 
    '&#8226' + '&emsp;' + location;

    console.log(lst);

    // Panel layout
    companyNode.appendChild(companyText);
    newNode.appendChild(newText);
    featuredNode.appendChild(featuredText);

    output.appendChild(photo);
    output.appendChild(topInfo);
    topInfo.appendChild(companyNode);
    topInfo.appendChild(newNode);
    topInfo.appendChild(featuredNode);
    output.appendChild(name);
    output.appendChild(botInfo);
    output.appendChild(tags);

    for(var i = 0; i < lst.length; i++) {
        var num = i+1;
        var n = num.toString();
        var node = document.createElement('t' + n);
        node.className = 'tag';
        var text = document.createTextNode(lst[i]);
        node.appendChild(text);
        tags.appendChild(node);
    }

    // If the user is new or featured 
    if (isNew == false) {
        topInfo.style.display = "none"
    } else if (isFeatured == false) {
        topInfo.style.display = "none"
    }


    // Clear button functionality
    document.getElementById("btnclear").addEventListener("click", function() {
        removeItem('all');
    });

    // All other filter button functionalities
    document.getElementById("x1").addEventListener("click", function() {
        removeItem("one");
    });

    document.getElementById("x2").addEventListener("click", function() {
        removeItem("two");
    });

    document.getElementById("x3").addEventListener("click", function() {
        removeItem("three");
    });

    document.getElementById("x4").addEventListener("click", function() {
        removeItem("four");
    });

    document.getElementById("x5").addEventListener("click", function() {
        removeItem("five");
    });

    document.getElementById("x6").addEventListener("click", function() {
        removeItem("six");
    });

    // Tag buttons

    function addItem(x) {

    }

    function addPanel(x) {
        x.toString();
        var node = document.createElement('div');
        node.setAttribute("id", "user-" + x)
        document.getElementById("main-panel").appendChild(node);
    }

    // addPanel(2);
    // addPanel(3);
    
    function removeItem(x) {

        var ul =  document.getElementById("dynamic-list");
        if (x == 'all') {
            while (ul.lastElementChild) {
                ul.removeChild(ul.lastElementChild);
            }
        } else {
            ul.removeChild(document.getElementById(x));
        }
    }
});