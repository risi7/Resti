$(document).ready(function(){
    
    var API_KEY = "AIzaSyCIQm5ERXNwxPpecVQJmLMoUsfgNvHO_zI"

    var video = ''

    $.get("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCIQm5ERXNwxPpecVQJmLMoUsfgNvHO_zI"+"&type=video&part=snippet&maxResults=26"+"&q=Stress Relief",function(data){
            console.log(data)

            data.items.forEach(item => {
                video = `
                
                <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                `

                $("#videos").append(video)

            });
        })


    $("form").submit(function (event) {
        event.preventDefault()

        var search = $("#search").val()

        videoSearch(API_KEY,search,26)

    })

    function videoSearch(key, search, maxResults) {

        $("#videos").empty()

        $.get("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+maxResults+"&q="+search,function(data){
            console.log(data)

            data.items.forEach(item => {
                video = `
                
                <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
                `

                $("#videos").append(video)

            });
        })


    }
})