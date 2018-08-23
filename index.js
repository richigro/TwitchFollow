const url = "https://openapi.etsy.com/v2/listings/active?limit=50&offset=0&api_key=wx9upjki3704ec3rnuf1r87c"
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