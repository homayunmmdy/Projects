$( document).ready(function(){{

  //Slider
  var swiper;
  function renderSlider(){
    swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      loop: true,
      lazy: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-slider-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  }
  renderSlider();
  window.addEventListener("resize", ()=>{
    swiper.destroy();
    renderSlider();
  });
  

  //khadamat
  var slideStatus = false;
  var widthOfScreen = document.body.clientWidth;
  
  function updateSlideStatus() {
    widthOfScreen = document.body.clientWidth;
  
    if (widthOfScreen < 992 && slideStatus === false) {
      console.log("Less")
      slideStatus = true;
  
      $(".e-service").addClass("eServiceSwiper swiper");
      $(".e-service > .khadamat_slider_wrapper").addClass("swiper-wrapper");
      $(".e-service > .khadamat_slider_wrapper > div").addClass("swiper-slide");
  
      window.eServiceSwiper = new Swiper(".eServiceSwiper", {
        direction: "horizontal",
        loop: false,
        slidesPerView: 1,
        slidesPerColumn: 1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: ".swiper-khadamat-pagination",
          clickable: true,
        },
      });
    } else if (widthOfScreen >= 992 && slideStatus === true) {
      slideStatus = false;
      eServiceSwiper.destroy();
      $(".e-service").children(".khadamat_slider_wrapper").children("div").removeClass("swiper-slide");
      $(".e-service").children(".khadamat_slider_wrapper").removeClass("swiper-wrapper");
      $(".e-service").removeClass("eServiceSwiper");
  
      console.log("more");
    }
  }
  
  // Call the function when the page loads
  updateSlideStatus();
  
  // Add event listener to the window object to trigger the function on window resize
  window.addEventListener("resize", updateSlideStatus);


   //Change Navbar
   window.onscroll = function() {scrollFunction()};
        
   function scrollFunction(){
     $(window).scroll(function() {
       if ($(this).scrollTop() > 112) {
         $(".header ").addClass(" header_fix")
       }else{
         $(".header ").removeClass("header_fix")
       }
     })
   }


   //dropdown
  $(".dropdown-btn").click(function() {
    $(this).toggleClass("active");
    let dropdownContent = $(this).next();
    let chevronUp = $(this).find(".menu-icon-chevron-up");
    let chevronDown = $(this).find(".menu-icon-chevron-down");

    if (dropdownContent.css("display") == "block") {
      dropdownContent.hide();
      $(this).find(".nav_text").css("color", "#1e4449");
      chevronUp.hide();
      chevronDown.show();
    } else {
      dropdownContent.show();
      $(this).find(".nav_text").css("color", "#0d2488");
      chevronUp.show();
      chevronDown.hide();
    }
  });
  

  //Close and open menu
  $(".menu_icon").click(function(){
    $("#myNav").css("height", "627px");
    $("#quickAccessMain").css("height", "883px");
    $("body").css("overflow", "hidden");
  })
  
  $(".qah_icon").click(function(){
    $("#myNav").css("height", "0px");
    $("#quickAccessMain").css("height", "0px");
    $("body").css("overflow", "scroll");
  })


  //Close menu
  $("#quickAccessMain").click(function(event) {
    let menu = $('#myNav');
    let menuIcon = $('.menu_icon');
    if (menu.css('display') == "block") {
      if (menuIcon.is(event.target) || event.target == menu[0]) {
        return;
      } else {
        let menuChildren = menu.find('*');
        let count = 0;
        menuChildren.each(function() {
          if (event.target == this) {
            count = 1;
            return false;
          }
        });
        if (count == 0) {
          console.log("close")
          $("#myNav").css("height", "0px");
          $("#quickAccessMain").css("height", "0px");
          $("body").css("overflow", "scroll");
        }
      }
    }
  });


  let activeTab = 0;
  let intervalId;
  
  function startIntervalFrom(index) {
    clearInterval(intervalId); // clear previous interval
    activeTab = index; // set active tab to the clicked one
    intervalId = setInterval(function(){
      let $contentes = $(".ayeha_contents .ayeha_item_contents ");
      let $tabs = $(".ayeha_tabs li");
      $contentes.eq(activeTab).removeClass("ayeha_contents_show")
      $tabs.eq(activeTab).removeClass("active_item");
      activeTab++;
      if(activeTab >= $tabs.length && activeTab >= $contentes.length){
        activeTab = 0;
      }
      $contentes.eq(activeTab).addClass("ayeha_contents_show")
      $tabs.eq(activeTab).addClass("active_item");
    }, 2000);
  }
  
  $(".ayhea_tab").click(function(event){
    let $previousContent = $(".ayeha_contents_show");
    let $previous = $(".active_item");
    if($previousContent.length > 0){
      $previousContent.removeClass("ayeha_contents_show")
    }
    if ($previous.length > 0) {
      $previous.removeClass("active_item");
    }
    $(event.target).addClass("ayeha_contents_show");
    $(event.target).addClass("active_item");
    startIntervalFrom($(this).index()); // pass clicked tab index to startIntervalFrom
  });
  
  // start interval initially
  startIntervalFrom(-1);

    //map drop down content
    $("#selectedOption").click(function(){
      if($("#content").css("display") === "none"){
        $("#content").show();
      } else {
        $("#content").hide();
      }
    });


    //Title for dropdown
    $("svg g.province path").click(function(){
      let selected = $(this).attr("title");
      $(".selectedOptionName").text(selected)
    })

    //Items
    $( "svg g.province path" ).each( function( index, element ){
      let ProvianceNames = $(this).attr("title");
      let ProvianceID = $(this).attr("id");
      let aTag =$("<a></a>").text(ProvianceNames);
      aTag.attr("herf" , "#");
      aTag.attr("id" , ProvianceID)
      aTag.attr("title" , ProvianceNames)
      let div = $("<div></div>").append(aTag)
      div.attr("class" , "Titter")
      $( "#content" ).append( div )
    });
    
    // ajax and fetch the data
    $.ajax({
      url : "/js/data.json",
      dataType : "json",
      method : "GET",
      success : function(response){
        let data = response.data;
        let html = "";

        console.log(data);
        for(let i = 0 ; i < data.length; i++){
          let item = data[i]
           html += 
          `
          <article class="ostan_item_content">
          <div class="row g-0">
            <div class="ostan_img">
              <img src=${item.img} alt="">
            </div>
            <article class="ostan_text">
              <div class="ins_text">
                <p class="muted" style="margin: 0px;">${item.topText}</p>
                <h6 class="Titter ostan_titter">${item.Tittle}</h6>
                <p class="ostan_paragraph">${item.description}</p>
              </div>
            </article>
          </div>
          </article>
          `
          ;
          
        }
        $("#apiOstan").html(html);
      },
      error:function(){
        $("#apiOstan").html("<h2>Error to fectch the data</h2>");
      }
    }) 	
    
    const swiperImg = new Swiper(".mySwiperImg", {
      spaceBetween: 30,
      loop: true,
      lazy: true,
      centeredSlides: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      }
    });

    //swiper image
    let $Images = $(".pic img");
    $Images.on("mouseover", function() {
      let indexImg = $(this).attr("id");
      console.log(indexImg);
      swiperImg.slideToLoop(indexImg);
    });


}})
