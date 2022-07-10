let pushProject = []
let checkedBox = []

function projectSubmit(event) {
    event.preventDefault()

    let title = document.getElementById("projectName").value
    let desc = document.getElementById("desc").value
    let image = document.getElementById("imageUpload")
    let startDate = document.getElementById('startDate').value;
    let endDate = document.getElementById('endDate').value
    
    image = URL.createObjectURL(image.files[0]);

    // Noted : Ambil data checkbox
    let checkboxSelector = document.getElementsByName('CB');

    checkedBox = [];
    for (let i = 0; i < checkboxSelector.length; i++) {
        if (checkboxSelector[i].checked == true) {
            checkedBox.push(checkboxSelector[i].value)
        }
    }

    // console.log (checkedBox)
    
    let project = {
        title,
        startDate,
        endDate,
        desc,
        image,
        checkedBox
    };
    // console.log(project)
    pushProject.push(project)
    // console.log (pushProject)
    domInner()
}


function domInner() {
    let content = document.getElementById('contentProject');
    content.innerHTML = "";

    for (i = 0; i < pushProject.length; i++) {
        content.innerHTML += `
        <div class="post">
                    <img src="${pushProject[i].image}" alt="">
                    <h3> <a href="detail.html"> ${pushProject[i].title} </a></h3>
                    <p class="duration">duration : ...</p>
                    <div class="article"><p> ${pushProject[i].desc}</p></div>
                    <div class="icontech">
                    ${(hello = () => {
                        let iconGrup = ""
                        for (let b = 0; b < checkedBox.length; b++) {
                            iconGrup += `
                                    <i class="fa-brands fa-${pushProject[i].checkedBox[b]}"></i>`
                        }
                        return iconGrup
                    })()}
                    </div>
                    <div class="flex-btn">
                        <button class="delete">delete</button>
                        <button class="edit">edit</button>
                    </div>
                </div>`
    }
    
}