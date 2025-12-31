function changeTitle(){
    const heading = document.getElementById("title");
    heading.innerText = "Title updated by using getElementById";
}

function changeTextcolor(){
    const courses = document.getElementsByClassName("course");
    for(let i = 0; i < courses.length; i++){
        courses[i].style.color = "green";
        courses[i].style.fontWeight = "bold";
    }
}

function highlight(){
    const box = document.querySelector(".highlight");
    box.style.backgroundColor = "green";
    box.style.border = "2px solid blue";
}