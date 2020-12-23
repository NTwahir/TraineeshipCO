// Variables
var allTags = ["Frontend", "CSS", "JavaScript", "HTML", "Senior", "Junior",
"Midweight", "Fullstack", "Python", "React", "Sass", "Ruby", "Backend", 
"RoR", "Vue", "Django", "FullStack"];

//Methods
function addPanel(x) {
    x += 1;
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
        var node = document.createElement('li');
        node.className = 'tag';
        node.setAttribute("id", lst[i]);
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

    if (x == 'all') {
        div.style.display = "none";
        allTags.forEach(function(item) {
            document.getElementById(item).style.display = "none";
        })
    } else {
        tag.style.display = "none";
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
    tagFunction(li, 10);
    //checkTags(li, "HTML");
}

/**
 * 
 * @param {*} lstOfTags smt
 * @param {*} tag 
 */
function checkTags(lstOfTags, tag) {
    // Check for equal tag in lstOfTags
    let result = false;
    let arr = [];
    let arr2 = [];
    let filterTab = document.getElementById("filter-tab");
    let li2 = filterTab.getElementsByTagName("li");

    lstOfTags.forEach(function(item) {
        arr.push(item.innerHTML);
    })
    for (let j = 0; j < allTags.length; j++) {
        if (li2[j].style.display == "") {
            arr2.push(li2[j].innerHTML.split("<")[0].trim());
        }
    }
    let checker = (arr, target) => target.every(v => arr.includes(v));
    result = checker(arr, arr2);
    return result; 
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

function tagFunction(lstOfTags, noOfUsers) {
    
    for (let i = 0; i < lstOfTags.length; i++) {
        let value = lstOfTags[i].innerHTML;
        let tag = lstOfTags[i];
        tag.addEventListener("click", function() {
            addItem(value);
            filter(value, noOfUsers);
            goodLayout();
        });
    }
}

function filter(tag, noOfUsers) {
    for (let k = 0; k < noOfUsers; k++) {
            let mainPanel = document.getElementById("main-panel");
            let subPanels = mainPanel.getElementsByTagName("ul");
            // Get each tag from div
            let li = subPanels[k].querySelectorAll("li.tag");
            let hasTag = checkTags(li, tag);
            togglePanel(k, "none");
            if (hasTag) {
                togglePanel(k, "");
            } else if (!hasTag) {
                togglePanel(k, "none");
            } else {
                togglePanel(k, "none");
            }
        }

    }

/**
 * {@param i}
 */  
function filterBtns() {
    // Clear button functionality
    document.getElementById("btnclear").addEventListener("click", function() {
        removeItem('all');
        goodLayout();
        for (let i = 0; i < 10; i++) {
            togglePanel(i, "");
        }
    });

    allTags.forEach(function(item) {
        let xBtn = document.getElementById(item).getElementsByTagName("a")[0];
        xBtn.addEventListener("click", function() {
            removeItem(item);
            filter(item, 10);
        })
    });
}

// Change the state of a user to either show or hide panel
function togglePanel(user, state) {
    let mainPanel = document.getElementById("main-panel");
    let subPanels = mainPanel.querySelectorAll("#sub-panel");
    let panel = subPanels[user];
    panel.style.display = state;
}

/**
 * Prevents layout of the page to jump.
 */
function goodLayout() {
    let div =  document.getElementById("filter-tab");
    let state = div.style.display;
    if (state == "none") {
        document.getElementById("main-panel").style.top = "80px";
    } else {
        document.getElementById("main-panel").style.top = "0";
    }
}

/**
 * Event listener function that changes the visiblity of
 * the line separating the info and tags.
 * @param {*} node the affected node.
 */
function onResize(node){
    // Get width of the window excluding scrollbars
    // And changes display of line
    var w = document.documentElement.clientWidth;
    if(w <= 1080) {
        node.style.display = "";
    } else {
        node.style.display = "none";
    }
}

export {addPanel, makeTags, showFeature, filterBtns, getTags, onResize};