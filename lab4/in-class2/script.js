function addNode() {
    // 1. <p>Java</p>
    let pt4 = document.createElement("p");
    // 2. create text node 
    let txt = document.createTextNode("Java");
    // 3. append text node to a parent node
    pt4.appendChild(txt);
    // 4. select a parent node            
    let parent1 = document.getElementById("div1");
    // 5. append element node to a parent node
    parent1.appendChild(pt4);

    
    /*  uncomment in step 2 **/
    // let childP1 = document.getElementById("p1");
    // parent1.insertBefore(pt4, childP1);                       
}

function deleteNode() {
    let parent2 = document.getElementById("div1");
    let delPtag = document.getElementById("p1");
    parent2.removeChild(delPtag);
}

// พอเรากด del ค่าที่เราแทรกไปก่อนหน้า มันจะไปต่อท้ายแทน

function addNewImage() {
    // <img src="http://webdev.it.kmitl.ac.th/labdocs/lab3/images/md2.png">
    let imgtag = document.createElement("img");

    imgtag.setAttribute('src', 'http://webdev.it.kmitl.ac.th/labdocs/lab3/images/md2.png');
    imgtag.setAttribute('class', 'img1');


    // add IMG to parent node
    let parent3 = document.getElementById('div2');
    parent3.appendChild(imgtag)                                              
}          

function changeStyles() {
    let d = document.getElementById("div1");
        // d.style.color = "blue";
        // d.style.fontFamily = "Gill Sans, sans-serif";

    // another methods
    d.setAttribute('class','newfont')
}
