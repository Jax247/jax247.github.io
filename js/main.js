

$(function() {
  generateProjectCards();
  VanillaTilt.init(document.querySelectorAll(".card"), {

  });
});

function generateProjectCards(e) {
  let card;
  let previewImg;
  let simpleContent;
  let title;
  let extraContent;
  let tags;
  let newTag;
  let color;
  let icon;
  let projectLinks;
  let srcLink;
  let liveLink;
  let temp1;
  let temp2
  let cardlist = [];
  
  projects.forEach((project) => {
    card = $("<div></div>");
    card.addClass("card");
    // card.attr("data-tilt", "")
    // card.attr("data-tilt-glare", '') 
    // card.attr("data-tilt-max-glare", "0.1")
    
    previewImg = $("<img></img>");
    previewImg.attr("src", `${project.screenshotpath}`);
    
    simpleContent = $("<div></div>");
    simpleContent.addClass("simple-content");
    
    title = $("<h1></h1>");
    title.text(`${project.name} - ${project.type}`)
    simpleContent.append(title)
    simpleContent.append(`${project.description}`)
    
    extraContent = $("<div></div>");
    extraContent.addClass("extra-content");
    
    tags = $("<div></div>");
    tags.addClass("tags");
    
    project.tags.forEach((tagName) => {
      
      // console.log(projectTags);
      if (projectTags[tagName.toLowerCase()] !== undefined) {
        color = projectTags[tagName.toLowerCase()].color;
        icon = projectTags[tagName.toLowerCase()].icon;
      } else {
        color = "#aaa";
        icon = "/assets/211751_gear_icon.png";
      }
      
      newTag = $("<div></div>");
      newTag.addClass("tag");
      newTag.css("background-color", color);
      
      newTag.append($(`<img></img>`).attr("src", `${icon}`));
      newTag.append($(`<p></p>`).text(tagName));

      tags.append(newTag);
    });

    
    projectLinks = $("<div></div>");
    projectLinks.addClass("project-links");
    
    temp1 = $("<i></i>");
    temp1.addClass("fab fa-github");
    
    srcLink = $("<a></a>");
    srcLink.addClass("project-src");
    srcLink.attr("href", `${project.srcLink}`);
    srcLink.attr("target", "_blank");
    srcLink.append(temp1);
    srcLink.append("Source");
    
    temp2 = $("<i></i>");
    temp2.addClass("fa fa-globe");
    temp2.attr("aria-hidden", "true");
    
    liveLink = $("<a></a>");
    liveLink.addClass("project-live");
    liveLink.attr("href", `${project.liveLink}`);
    liveLink.attr("target", "_blank");
    liveLink.append(temp2);
    liveLink.append("Live");
    
    projectLinks.append(srcLink);
    projectLinks.append(liveLink);
    
    extraContent.append(tags);
    extraContent.append(projectLinks);


    card.append(previewImg);
    card.append(simpleContent);
    card.append(extraContent);


    $(".project-container").append(card);
  });

  
}

$(function () {

  $("#about-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      0
    );
  });

  $("#projects-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#projects").offset().top,
      },
      0
    );
  });

  $("#contact-link").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top,
      },
      0
    );
  });
});

$(window).click(function (e) {
  if (e.target == $("#project-modal")) {
    closeModal();
  }
});

// Populate modal with data relevant to the project being passed in
// function generateModal(e) {
//   // get relevant divs to change data
//   console.log(e);

//   let project = projects.filter((p) => p.name === e.id)[0]; // comes back as array

//   console.log(project);
//   $("#modal-title").html(`${project.name} - ${project.type}`);
//   $("#project-description").html(project.description);
//   $("#project-demo").attr("src", `${project.screenshotpath}`);
//   $(".github-link").attr("href", `${project.srcLink}`);
//   $("#live-link").attr("href", `${project.liveLink}`);

//   project.tags.forEach((tag) => {
//     $("#tag-list").append(`<li>
//                                 <img src="./assets/tick.png" alt="check"/>
//                                 ${tag}
//                             </li>`);
//   });

//   $(".modal").css("display", "flex");
// }

// function closeModal() {
//   $("#tag-list").empty();
//   $(".modal").css("display", "none");
// }
