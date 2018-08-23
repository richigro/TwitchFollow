const url = "https://openapi.etsy.com/v2/listings/active?api_key=wx9upjki3704ec3rnuf1r87c"

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