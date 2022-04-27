function run() {


    var artist = $("#artistName").val();
    var limit = $("#resultNum").val();
console.log(artist)
    $.ajax({
        url: 'https://itunes.apple.com/search?entity=song&&attribute=artistTerm&term=' + artist + "&limit=" + limit,
        dataType: "jsonp",
        success: process
    });
}


function process(data) {
  console.log(data);
    //num = $('#resultNum').val();
    var num = 1;
    console.log(num);
    var songs = data.results;
    var o = "";
    o += "<tr> <td> Song Rank </td> <td> Artist Name</td> <td> Name </td> <td> Album </td> <td> Album Art</td><td> Preview </td></tr>"
    for(var p=0;p<songs.length;p++) {
        o += "<tr>";
        o += "<td>" + num + "</td>";
        o += "<td>" + $("#artistName").val();
        o += "<td>" + songs[p].trackName + "</td>";
        o += "<td>" + songs[p].collectionName + "</td>";
        o += "<td>" + "<img src=" + songs[p].artworkUrl100 + "></td>";
        o += "<td><audio controls> <source src=" + songs[p].previewUrl + "></audio></td>"
        o += "</tr>";
        num++;
    }

    var table = document.getElementById("output");
    table.innerHTML = o;
    table.style.display = "block";

}