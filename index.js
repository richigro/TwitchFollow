const url = "endpoint here"

function getDataFromApi(){
    $.ajax({
        url: url,
        success: function(data) {
            console.log(data);
        }
    });
}


function appInstance() {
    getDataFromApi();
}


$(appInstance);