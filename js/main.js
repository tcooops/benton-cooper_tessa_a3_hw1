(() => {

    // make an AJAX request using Fetch API (a more streamlined version of using AJAX. We did the old school way in wk1)
    fetch('./data/classData.json')
        .then(res => res.json())
        // fetch the resource we want, then get the response (the json object), convert to a plain javascript obvject i can use. res.json is a built in method do do this. now we can do what we want

        // then give me the data
        .then(data => {
           // debugger;
            console.log(data);
            
            let profPanel = document.querySelector('.profPanelText')

            profPanel.children[0].textContent = data.coursename + ' ' + data.coursecode
            profPanel.children[1].textContent = 'Professor-' + data.profname 
                // spencer assisted with adding the "professor" to the string
            profPanel.children[2].textContent = data.classtime[0] + ' & ' + data.classtime[1]

            let courseDesc = document.querySelector('.courseInfo')

            courseDesc.children[0].textContent = data.coursename
            courseDesc.children[2].textContent = data.coursedesc
        
                 console.log(data);
        })

    .catch((err) => {
        console.log(err); // could make a redirect to a 404 page

    })

})();
 