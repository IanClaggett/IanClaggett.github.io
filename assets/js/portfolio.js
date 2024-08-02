$(document).ready(function () {

    //Animating the slide down
    $("#header").hide();
    $("#header").slideDown("slow");

    $(".image > img:nth-child(1)").click(function () {
        $("#main").fadeOut("slow");
        $("#header").slideUp("slow", function () {
            window.location.replace("/");
        });
    })

    //Animating the transition to portfolio
    $(".actions > li:nth-child(1)").click(function () {
        $("#one").fadeOut("slow");
        $("#header").slideUp("slow", function () {
            window.location.replace("portfolio");
        });
    })

    //Refreshing portfolio content
    $("a.button:nth-child(2)").click(function () {
        $(".card").stop(true);
        $(".card").fadeOut("fast", function () {
            $("#head").html("Ruby Projects");
            $("#tail").html('<div class="accordion" id="accordionExample"> <div class="card"> <div class="card-header" id="headingOne"> <h5 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="text-decoration: none;"> Game of Set </button> </h5> </div> <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#accordionExample"> <div class="card-body"> <span class="image fit"><img src="images/project_images/GameOfSet.png" alt="set" /></span> <br> The Game of Set is the first expedition and project developed alongside my team in the language of Ruby. It was my first step in the software development cycle, distributed version control, and SCRUM frameworks. </div> </div> </div> <div class="card"> <div class="card-header" id="headingTwo"> <h5 class="mb-0"> <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="text-decoration: none;"> '
                + 'Job Search </button> </h5> </div> <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample"> <div class="card-body"> <span class="image fit"><img src="images/project_images/JobSearch.png" alt="job search" /></span> <br> Job Search is a webscrapping program utilizing the Mechanize and Nokogiri gems. This program allows users to search for jobs at OSU Workday, access Human Resources, receive and search OSU News, and display OSU Faculty FAQs. </div> </div> </div> <div class="card"> <div class="card-header" id="headingThree"> <h5 class="mb-0"> <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="text-decoration: none;"> Staff Webpage Redesign </button> </h5> </div> <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample"> <div class="card-body"> <span class="image fit"><img src="images/project_images/FacultyPage.png" alt="faculty" /></span> My web development team and I were tasked with the redesigning of staff member Eric Fossler-Luciers faculty page. This was done utilizing scriplets of embedded ruby generated and interpreted by the Middleman gem. The code scrapes the information off of the provided website, and redisplays it in a more stylized, cohesive design. This project was an assignment to help improve our Ruby, CSS, and HTML design. </div> </div> </div> </div>')});
        $(".card").fadeIn("slow");
    });
});