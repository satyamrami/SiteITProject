d3.csv("SiteIT.csv").then(function (data) {
  // console.log(data);

  var SiteIT = data;

  var button = d3.select("#button");

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit", runEnter);

  function runEnter() {
    d3.select("tbody").html("")
    d3.selectAll("p").classed('noresults', true).html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#user-input");
    var inputValue = inputElement.property("value").toUpperCase().trim();

    // console.log(inputValue.length);
    // console.log(movies);
    if (inputValue.length <= 1){
      d3.select("p").classed('noresults2', true).html("<center><strong>Please try using at least 2 characters to search for the state</strong>")
      inputValue = "Something to give no results"
    }
    var filteredData = SiteIT.filter(SiteIT => SiteIT.State.toUpperCase().trim().includes(inputValue));
    // console.log(filteredData.length)
    if (filteredData.length === 0 && inputValue !== "Something to give no results"){
      d3.select("p").classed('noresults', true).html("<center><strong>No results. Please check your spelling!</strong>")
    }
       
     for (var i = 0; i < filteredData.length; i++) {
      d3.select("tbody").insert("tr").html("<td>"+[i+1]+"</td>"+"<td>" +(output[i]['State'])+"</td>" +"<td>" +(output[i]['Zone'])+"</td>"  +"<td>" +(output[i]['PrimaryRep'])+"</td>"+"<td>" +(output[i]['SecondaryRep'])+"</td>") +"<td>"(output[i]['Supervisor'])+"</td>"}
    };
  
  window.resizeTo(screen.width,screen.height)
});
