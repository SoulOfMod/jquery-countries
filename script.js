/* $("#btnShowCountries").click(function () {

  $.ajax({
    url: "http://localhost:8000/countries",

    success: function (data, statuts, response) {

      for (var i = 0; i < data.length; i++) {
        // for (var i of data) {

        $("#countries").append(<li>${data[i]}</li>);

      }
      $("text").html("Nouveau Click");
      console.log(data);
      // $("#text").html(data)
    }
  })
})

 */


function getCountries() {

}

$(function () {

  $("#btnShowCountries").click(function () {
    $.ajax(
      "https://localhost:8000/countries",
      {
        success: function (data, status, response) {

          for (i = 0; i < data.length; i++) {
            $("ul").append(<li> ${data[i]} </li>)

          }

        }
      }
    )
  }
  )
})