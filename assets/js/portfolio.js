$(document).ready(function () {

    //Animating the slide down
    $("#header").hide();
    $("#header").slideDown("slow");

    //Animating the transition to index
    $(".image > img:nth-child(1)").click(function () {
        $("#main").fadeOut("slow");
        $("#header").slideUp("slow", function () {
            window.location.replace("/");
        });
    })

    //Animating the transition to portfolio
    $(".actions > li:nth-child(1)").click(function () {
        $("#one").fadeOut("slow");
        $("#header").animate({left: '-600px'},"slow", function () {
            window.location.replace("portfolio");
        });
    })

    //Animating the transition to resume
    $(".actions > li:nth-child(2)").click(function () {
        $("#one").fadeOut("slow");
        $("#header").animate({left: '-600px'},"slow", function () {
            window.location.replace("resume");
        });
    })

    //Refreshing portfolio content
    $("a.button:nth-child(2)").click(function () {
        $(".card").stop(true);
        $(".card").fadeOut("fast", function () {
            $("#head").html("Ruby Projects");
            $("#tail").html('<div class="accordion" id="portfolioAccordion"> <div class="card"> <div class="card-header" id="headingOne"> <h5 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="text-decoration: none;"> Game of Set </button> </h5> </div> <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#portfolioAccordion"> <div class="card-body"> <span class="image fit"><img src="images/project_images/GameOfSet.png" alt="set" /></span> <br> The Game of Set is the first expedition and project developed alongside my team in the language of Ruby. It was my first step in the software development cycle, distributed version control, and SCRUM frameworks. </div> </div> </div> <div class="card"> <div class="card-header" id="headingTwo"> <h5 class="mb-0"> <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="text-decoration: none;"> Job Search </button> </h5> </div> <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#portfolioAccordion"> <div class="card-body">'
                 + ' <span class="image fit"><img src="images/project_images/JobSearch.png" alt="job search" /></span> <br> Job Search is a webscrapping program utilizing the Mechanize and Nokogiri gems. This program allows users to search for jobs at OSU Workday, access Human Resources, receive and search OSU News, and display OSU Faculty FAQs. </div> </div> </div> <div class="card"> <div class="card-header" id="headingThree"> <h5 class="mb-0"> <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="text-decoration: none;"> Staff Webpage Redesign </button> </h5> </div> <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#portfolioAccordion"> <div class="card-body"> <span class="image fit"><img src="images/project_images/FacultyPage.png" alt="faculty" /></span> My web development team and I were tasked with the redesigning of staff member Eric Fossler-Luciers faculty page. This was done utilizing scriplets of embedded ruby generated and interpreted by the Middleman gem. The code scrapes the information off of the provided website, and redisplays it in a more stylized, cohesive design. This project was an assignment to help improve our Ruby, CSS, and HTML design. </div> </div> </div> </div>')});
        $(".card").fadeIn("slow");
    });

    $("a.button:nth-child(3)").click(function () {
        $(".card").stop(true);
        $(".card").fadeOut("fast", function () {
            $("#head").html("HTML/CSS");
            $("#tail").html('<div class="accordion" id="portfolioAccordion"> <div class="card"> <div class="card-header" id="headingOne"> <h5 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="text-decoration: none;"> Portfolio Website </button> </h5> </div> <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#portfolioAccordion"> <div class="card-body"> <span class="image fit"><img src="images/project_images/portfolio.png" alt="portfolio" /></span> <br> This portfolio is hosted on github Jekyll servers and is completely written by hand! Based off the initial design provided by <a href="https://github.com/andrewbanchich/strata-jekyll-theme">Andrew Banchich</a> and HTML5, this page features CSS, HTML, and Javascript written by me. As well as utilizing different frameworks and other tools such as SASS, Bootstrap, and Jquery. The site is constantly updated and expanding as I develop more projects and upload my older ones to github! The complete code can be found <a href="https://github.com/IanClaggett/IanClaggett.github.io">here:</a> </div> </div> </div> <div class="card"> <div class="card-header" id="headingTwo"> <h5 class="mb-0"> <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="text-decoration: none;"> Faculty Page Redesign </button> </h5> </div> <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#portfolioAccordion"> <div class="card-body"> <span class="image fit"><img src="images/project_images/FacultyPage.png" alt="calculator" /></span> <br> My web development team and I were tasked with the redesigning of staff member Eric Fossler-Luciers faculty page. This was done utilizing scriplets of embedded ruby generated' + 
                ' and interpreted by the Middleman gem. The code scrapes the information off of the provided website, and redisplays it in a more stylized, cohesive design. This project was an assignment to help improve our Ruby, CSS, and HTML design. </div> </div> </div> <div class="card"> <div class="card-header" id="headingThree"> <h5 class="mb-0"> <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style="text-decoration: none;"> Javascript Calculator </button> </h5> </div> <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#portfolioAccordion"> <div class="card-body"> <span class="image fit"><img src="images/project_images/Calc.png" alt="calculator" /></span> <br> The calculator webpage was an assignment for my web development team and I to create a reactive webpage to host a calculator script. This script allowed users to access much of the basic functionality found in a local windows calculator, as well as added functionality designed by the team. This included trigonometric functions, memory operations, octal/binary arithmetic, and exponentional operations. </div> </div> </div> </div>')});
        $(".card").fadeIn("slow");
    });

    $("a.button:nth-child(4)").click(function () {
        $(".card").stop(true);
        $(".card").fadeOut("fast", function () {
            $("#head").html("Javascript");
            $("#tail").html('<div class="accordion" id="portfolioAccordion"> <div class="card"> <div class="card-header" id="headingOne"> <h5 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="text-decoration: none;"> Portfolio Website </button> </h5> </div> <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#portfolioAccordion"> <div class="card-body"> <span class="image fit"><img src="images/project_images/portfolio.png" alt="portfolio" /></span> <br> This portfolio is hosted on github Jekyll servers and is completely written by hand! Based off the initial design provided by <a href = "https://github.com/andrewbanchich/strata-jekyll-theme">Andrew Banchich</a> and HTML5, this page features CSS, HTML, and Javascript written by me. As well as utilizing different frameworks and other tools such as SASS, Bootstrap, and Jquery. The site is constantly updated and expanding as I develop more projects and upload my older ones to github! The complete code can be found <a href="https://github.com/IanClaggett/IanClaggett.github.io">here:</a> </div> </div> </div> <div class="card"> <div class="card-header" id="headingTwo"> <h5 class="mb-0"> <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style="text-decoration: none;"> Javascript Calculator </button> </h5> </div> <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#portfolioAccordion"> <div class="card-body"> <span class="image fit"><img src="images/project_images/Calc.png" alt="calculator" /></span> <br> The calculator webpage was an assignment for my web development team and I to create a reactive webpage to host a calculator script. This script allowed users to access much of the basic functionality found in a local windows calculator, as well as added functionality designed by the team. This included trigonometric functions, memory operations, octal/binary arithmetic, and exponentional operations. </div> </div> </div> </div>')});
        $(".card").fadeIn("slow");
    });

    $("a.button:nth-child(5)").click(function () {
        $(".card").stop(true);
        $(".card").fadeOut("fast", function () {
            $("#head").html("Python");
            $("#tail").html('<div class="accordion" id="portfolioAccordion"> <div class="card"> <div class="card-header" id="headingOne"> <h5 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="text-decoration: none;"> Nu-nami </button> </h5> </div> <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#portfolioAccordion"> <div class="card-body"> <span class="image fit"><img src="images/project_images/NuNami.png" alt="Nunami" /></span> <br> Nu-Nami is a personal project meant to allow users to create their own Toonami blocks. Generating randomized TV program schedules filled with shows, bumpers, and commercials. Nu-Nami is a love letter to old anime and late night cartoon blocks, as well as the nostalgia of the early 2000s. It is a project that is actively updated and improved to create new and exciting experiences for my friends and I. I taught myself Python and used the project as a way to improve my own python skills while creating something new and interesting! </div> </div> </div> </div>')});
        $(".card").fadeIn("slow");
    });

    $("a.button:nth-child(6)").click(function () {
        $(".card").stop(true);
        $(".card").fadeOut("fast", function () {
            $("#head").html("Engineering");
            $("#tail").html('<div class="accordion" id="portfolioAccordion"> <div class="card"> <div class="card-header" id="headingOne"> <h5 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="text-decoration: none;"> MATLAB </button> </h5> </div> <div id="collapseOne" class="collapse hide" aria-labelledby="headingOne" data-parent="#portfolioAccordion"> <div class="card-body"> <span class="image fit"><img src="images/project_images/Matlab.png" alt="Matlab" /></span> <br> I have an assortment of different homeworks, labs, and projects centered around the mathematical programming language MATLAB. It was the first language I learned to utilize common software algorithms, logic, and object-oriented programming.The culmination of my teams work is showcased in a final project assigned for the last quarter of our first semester. A project in which we would create an animated graph of a Hohmann orbit transfer from Earth to a satellite given the distance from the satellite and the angle of approach. The final lab report can be accessed here: </div> </div> </div> <div class="card"> <div class="card-header" id="headingTwo"> <h5 class="mb-0"> <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style="text-decoration: none;"> Advanced Energy Vehicle </button> </h5> </div> <div id="collapseTwo" class="collapse hide" aria-labelledby="headingTwo" data-parent="#portfolioAccordion"> <div class="card-body"> <span class="image fit"><img src="images/project_images/AEV.jpg" alt="Nunami" /></span> <br> The purpose of this lab was to construct ' + 
                'and program an automatic vehicle transport to carry a cart along a track utilizing different sensors and programming techniques to create the most energy efficient model possible./nThe Indefatigable AEV design utilizes a puller-configuration and features several design applications to help create the most energy efficient model possible. The first of these design implementations would be the centralization of weight and balance along the body of the AEV. This design was drafted to maintain its balance and control on the track to remove the possibility of the AEV derailing from the track. This was accomplished by mirroring the propeller layout and wing layout on both sides, as well as distributing the servo motor, Arduino motherboard, monorail clamp, and battery back between both front and back of the AEV. This created an equilibrium of weight distribution which helped ensure the vehicle would stay on the track. Another important design implementation would be the condensed body the AEV utilizes. The body of the vehicle is light and small, allowing for a much more energy efficient build while the AEV travels uphill. Finally, the AEV features a hook drilled into the servo motor fin, bent into a lock to remove the possibility of the hook detaching itself. This design allows for the AEV to pull the cart without breaking or removing the hook from the AEV, stranding the passenger cart. To access the portfolio of lab data, click <a href="https://u.osu.edu/engr118202spr2021jasper/"> here: </a> </div> </div> </div> </div>')});
        $(".card").fadeIn("slow");
    });
});