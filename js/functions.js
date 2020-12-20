//Methods
function addPanel(x) {
    x.toString();
    var decoration = document.createElement('div');
    decoration.setAttribute("class", "decoration");
    var li = document.createElement('li');
    li.setAttribute("id", "sub-panel");
    var node = document.createElement('div');
    node.setAttribute("id", "user-" + x);
    node.setAttribute("class", "user");


    node.appendChild(decoration);
    li.appendChild(node);
    document.getElementById("main-panel").appendChild(li);
}

function makeTags(lst, mainNode) {
    for(var i = 0; i < lst.length; i++) {
        var num = i+1;
        var n = num.toString();
        var node = document.createElement('li');
        node.className = 'tag';
        node.setAttribute("id", "tag-" + n);
        var text = document.createTextNode(lst[i]);
        node.appendChild(text);
        mainNode.appendChild(node);
    }
}

function addItem(x) {
    let ul =  document.getElementById("filter-tab");
    let tag = document.getElementById(x);
    ul.style.display = "";
    tag.style.display = "";
}

function removeItem(x) {
 
    let div =  document.getElementById("filter-tab");
    let tag = document.getElementById(x);
    let allTags = ["Frontend", "CSS", "JavaScript", "HTML", "Senior", "Junior",
    "Midweight", "Fullstack", "Python", "React", "Sass", "Ruby", "Backend", 
    "RoR", "Vue", "Django", "FullStack"];

    if (x == 'all') {
        div.style.display = "none";
        allTags.forEach(function(item) {
            document.getElementById(item).style.display = "none";
        })
    } else {
        tag.style.display = "none";
        console.log(getValue(x));
    }
}

function getValue(myElement) {
    var target = document.getElementById(myElement);
    var tag = target.innerHTML;
    tag = tag.split("<");
    return tag[0];
}

function getTags(user) {
    let mainPanel = document.getElementById("main-panel");
    let subPanels = mainPanel.getElementsByTagName("ul");
    // Get each tag from div
    let li = subPanels[user].querySelectorAll("li.tag");
    tagFunction(li);
    checkTags(li, "HTML");
}

function checkTags(lstOfTags, tag) {
    // Check for equal tag in lstOfTags
    for (let i = 0; i < lstOfTags.length; i++) {
        let value = lstOfTags[i].innerHTML;
        console.log(value.indexOf(tag) > -1);
    }  
}

function showFeature(isNew, isFeatured, index) {

    let mainPanel = document.getElementById("main-panel");
    let newTag = mainPanel.querySelectorAll("li div.topInfo #new");
    let featureTag = mainPanel.querySelectorAll("li div.topInfo #featured");
    if (!isNew) {
        newTag[index].style.display = "none"
    } else {
        newTag[index].style.display = ""
    }

    if (!isFeatured) {
        featureTag[index].style.display = "none"
    } else {
        featureTag[index].style.display = ""
    }
}

function tagFunction(lstOfTags) {

    for (let i = 0; i < lstOfTags.length; i++) {
        let value = lstOfTags[i].innerHTML;
        let tag = lstOfTags[i];
        tag.addEventListener("click", function() {
            addItem(value);
            console.log(value);
            goodLayout();
        });
    }  

}

function filterFunction() {
    // Clear button functionality
    document.getElementById("btnclear").addEventListener("click", function() {
        removeItem('all');
        goodLayout();
    });

    // All other filter button functionalities
    document.getElementById("x1").addEventListener("click", function() {
        removeItem("Frontend");
    });

    document.getElementById("x2").addEventListener("click", function() {
        removeItem("CSS");
    });

    document.getElementById("x3").addEventListener("click", function() {
        removeItem("JavaScript");
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
}
// If no tags are visible or filter tab is not visible, show all panels
function showPanel(input) {}

// Prevents layout of the page to jump
function goodLayout() {
    let div =  document.getElementById("filter-tab");
    let state = div.style.display;
    if (state == "none") {
        document.getElementById("main-panel").style.top = "80px";
    } else {
        document.getElementById("main-panel").style.top = "0";
    }
}

export {addPanel, makeTags, getTags, showFeature, filterFunction, goodLayout};