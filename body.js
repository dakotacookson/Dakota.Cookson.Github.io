
let body = document.querySelector("#body")
body.innerHTML = `
  <div class="container w3-center w3-animate-right">
  <section class="col-md-12 content" id="home">
    <div class="col-lg-6 col-md-6 content-item tm-black-translucent-bg tm-logo-box">
      <!-- <i class="fa fa-snowflake-o fa-4x tm-logo"></i> -->
      <img id="MYFACE" src="./images/2019_03_19_C29_0680_1.jpg" alt="My Face">
      <h1 class="text-uppercase">Dakota Cookson</h1>


    </div>
    <div class="col-lg-6 col-md-6 content-item content-item-1 background tm-white-translucent-bg">
      <h2 class="main-title text-center dark-blue-text"> Welcome</h2>
      <p>I'm quirky, nerdy, and driven to solve anything put in front of me I'm on an upward climb and grow along with those around me, also I have an insatiable voracity for knowledge.</p>
    </div>
  </section>

  <section class="col-md-12 content padding tm-equal-col-container" id="services">
    <div class="col-lg-6 col-md-6 col-sm-12 content-item tm-black-translucent-bg tm-services-section-padding">
      <h2 class="main-title text-center dark-blue-text">Some Backround</h2>
      <p>Ever since I was young I had a fascination with technology, I had started watching my dad fix computers when I was five and I was fixated on his craft, shortly after he got into development and although it took me awhile I became fascinated with how the power of the typed worked can influence the fundamentals of everything we do on a computer.</p>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 tm-white-translucent-bg tm-services-section-padding tm-box-center">

      <div class="tm-left-col">
        <div class="tm-border-box tm-gray-border-br tm-img-box-1">
          <img src="./images/Capture.PNG" alt="Image 1"
            class="tm-img tm-img-tl">
        </div>
        <div class="tm-border-box tm-pink-border-bl tm-img-box-2">
          <img src="./images/Captureee.PNG" alt="Image 3"
            class="tm-img tm-img-bl">
        </div>

      </div>

      <div class="tm-right-col">
        <div class="tm-border-box tm-pink-border-tr tm-img-box-3">
          <img src="./images/Captttture.PNG" alt="Image 2"
            class="tm-img tm-img-tr">
        </div>
        <div class="tm-border-box tm-gray-border-tl tm-img-box-4">
          <img src="./images/Caeeeepture.PNG" alt="Image 4"
            class="tm-img tm-img-br">
        </div>
      </div>

    </div>

  </section>

  <section class="col-md-12 content padding tm-float-section tm-section-3">

    <div class="col-lg-6 col-md-6 content-item tm-black-translucent-bg"></div>
    <div class="col-lg-6 col-md-6 content-item tm-white-translucent-bg"></div>
    <div id="cleanuptext" class="tm-float-section-body tm-white-bg">
      <div class="col-lg-12">
        <h2 id="Proj1" class="text-center tm-white-text tm-section-3-header">Projects</h2>
        <div class="col-md-4 col-lg-4">
          <i class="fa fa-code fa-4x tm-fa-icon"></i>
          <button onclick="Frontpush()" class="centerButtontext"> Front End Capstone </button>
          <div>
          PIP is a single page application inspired by my mother, an educator 
          who works with autistic youth. The app was designed to help bolster the 
          social ability of students with high functioning autism and improving their social 
          skills through interactive training. Built using JavaScript, JSON, Bootstrap, and HTML5.
          </div>
        </div>
        <div class="col-md-4 col-lg-4">
          <i class="fa fa-code fa-4x tm-fa-icon"></i>
          <button onclick="perspush()" class="centerButtontext">Personal Project</button>
          <div>a Powershell script to make multifile transfer much faster </div>  
        </div>
        <div class="col-md-4 col-lg-4">
          <i class="fa fa-code fa-4x tm-fa-icon"></i>
          <button onclick="backpush()" class="centerButtontext">Back End Capstone</button>
          <div>Code Coffer is a multi-page MVC application, i built code coffer 
          in part due to frustration  of not having a localized source for all my 
          code snips and in part because i disliked how rough stack overflow looked so  I 
          built  a code repository with multi-user functionality and support
           for hidden and Favorited content created with c# and entity framework</div>
        </div>
      </div>
    </div>
  </section>

  <section class="col-md-12 content" id="contact">
    <div class="col-lg-6 col-md-6 content-item tm-content-box tm-black-translucent-bg">
      <h2 class="contact-title">Contact Info</h2>
      <p>Thank you for taking the time to look at my website I hope to hear from you soon, have a good day.</p>
      <p>
        Tel: 207-692-3008<br>
        Email: dakota.cookson1995@gmail.com
      </p>
    </div>

    <div class="col-lg-6 col-md-6 content-item tm-content-box tm-white-translucent-bg">
      <br>
      <br>
      <br>

      <div class="square1">
        <div class="square2">
          <div class="square3">
            <div class="square4">
              <div class="square5">
                  <div class="square6">
                      <div class="square7">
                        </div>
                    </div>
              </div>
            </div>
          </div>

        </div>
      </div>

  </section>

</div>

<script>

  // Write current year in copyright text.
  document.getElementsByClassName("tm-current-year").value = new Date().getFullYear();

</script>

<footer class="w3-center w3-animate-left" class="ICON">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="icon-bar">
    <a href="https://github.com/dakotacookson?tab=projects" class="github"><i class="fa fa-github"></i></a>
    <a href="https://www.linkedin.com/in/dakota-cookson-6003b0178/" class="linkedin"><i class="fa fa-linkedin"></i></a>
   </div>`
function backpush() {
      location.href = "https://github.com/dakotacookson/the-cofer-project" ;
      };

      function Frontpush() {
        location.href ="https://github.com/dakotacookson/Social-Stories-Aplication" ;
                };

                function  perspush() {
                  location.href ="https://github.com/dakotacookson/Multi-Threaded-File-Transfer-Powershell-Scrpit" ;
                          };

