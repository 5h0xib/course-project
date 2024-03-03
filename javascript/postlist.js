// delete fucntion for post 1
function deletePost1() {
    const d = document.getElementById("post1");
    const parent = post1.parentNode;
    

    parent.removeChild(post1);

    console.log("should have removed");

    document.querySelector('.DELETE-MODAL').style.display = 'none'
}

// delete fucntion for post 2
function deletePost2() {
    const d = document.getElementById("post2");
    const parent = post2.parentNode;

    parent.removeChild(post2);

    console.log("should have removed");

    document.querySelector('.DELETE-MODAL2').style.display = 'none'
}

// delete fucntion for post 3
function deletePost3() {
    const d = document.getElementById("post3");
    const parent = post3.parentNode;

    parent.removeChild(post3);

    console.log("should have removed");

    document.querySelector('.DELETE-MODAL3').style.display = 'none'
}

// delete fucntion for post 4
function deletePost4() {
    const d = document.getElementById("post4");
    const parent = post4.parentNode;

    parent.removeChild(post4);

    console.log("should have removed");

    document.querySelector('.DELETE-MODAL4').style.display = 'none'
}


// delete fucntion for post 5
function deletePost5() {
    const d = document.getElementById("post5");
    const parent = post5.parentNode;

    parent.removeChild(post5);

    console.log("should have removed");
    document.querySelector('.DELETE-MODAL5').style.display = 'none'
}

