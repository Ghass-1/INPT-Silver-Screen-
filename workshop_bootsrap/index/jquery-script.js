$(document).ready(function() {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('scrolled-nav');
    } else {
      $('.navbar').removeClass('scrolled-nav');
    }
  });


  $('.hero-section h1').append(' <span class="badge bg-danger fs-5 ms-2 align-middle shadow">V2.0</span>');



  $('#toggleScreeningsBtn').click(function() {
    $('#screenings').slideToggle('slow'); 
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('#backToTopBtn').fadeIn('fast'); // Appears after scrolling 300px
    } else {
      $('#backToTopBtn').fadeOut('fast'); // Hides when near the top
    }
  });

  
  $('#backToTopBtn').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  });








  $('#addActivityBtn').click(function() {
    const newCardHTML = `
      <div class="col-md-4 new-card" style="display:none;">
        <div class="card movie-card h-100 text-light border-danger">
          <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop" class="card-img-top" alt="Mystery Movie">
          <div class="card-body p-4">
            <span class="badge bg-light text-dark mb-2">Special</span>
            <h5 class="card-title fw-bold fs-4">Midnight Mystery</h5>
            <p class="card-text opacity-75">A secret avant-premiere. Title revealed at the door.</p>
          </div>
        </div>
      </div>`;
    
    $('#screenings .row').append(newCardHTML);
    $('.new-card').fadeIn('slow');
  });


  $('.delete-btn').click(function() {

    let memberName = $(this).parent().find('.member-name').text();
    
    if (memberName === "Ghassan H.") {
      alert("Error: You cannot delete the leader, Ghassan H.! (^-^)");
    } else {
      // If it's not Ghassan, fade out the entire parent container 
      $(this).parent().fadeOut('fast', function() {
        $(this).remove(); // Removes it from the DOM completely after fading
      });
    }
  });

  
  // This targets every <h2> element that sits directly inside a <section> tag
  $('section h2').css({
    'color': '#ffffff',
    'text-shadow': '0px 0px 10px rgba(229, 9, 20, 0.8)' // Adds a cool red glow
  });


  $('#screenings .card-body').first().prepend('<span class="badge bg-success mb-2 me-2 shadow">NEW!</span>');






  $('.card').hover(
    function() {
      $(this).css({
        'transform': 'translateY(-15px)', 
        'box-shadow': '0 15px 25px rgba(229, 9, 20, 0.4)', 
        'transition': 'all 0.3s ease'
      });
    },
    function() {
      $(this).css({
        'transform': 'translateY(0)', 
        'box-shadow': 'none'
      });
    }
  );

  $('.team-member-card').click(function(event) {
    if(!$(event.target).hasClass('delete-btn')) {
      let memberName = $(this).find('.member-name').text();
      alert("Director's Cut: You are viewing the profile of " + memberName + "!");
    }
  });

  $('.card').dblclick(function() {
     
    if ($(this).css('transform') !== 'none' && $(this).css('transform') !== 'matrix(1, 0, 0, 1, 0, 0)') {
      $(this).css({'transform': 'scale(1)', 'z-index': '1'}); // Shrink back
    } else {
      $(this).css({'transform': 'scale(1.1)', 'z-index': '10', 'position': 'relative'}); // Enlarge
    }
  });


  $(document).keydown(function(event) {
        if($(event.target).is('input, textarea, select')) return;

    // Generates a random dark cinematic hex color (using only dark numbers 0-5)
    let darkLetters = '012345'; 
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
      randomColor += darkLetters[Math.floor(Math.random() * 6)];
    }
    
    // Applies the random dark color to the body
    $('body').css({'background-color': randomColor, 'transition': 'background-color 0.3s'});
  });




  
  $('#announcementBanner').slideDown(1000).delay(4000).slideUp(1000);

  $('.hero-section .col-lg-8').hide().slideDown(1500).fadeIn(1500);


  $('section').css({'opacity': '0', 'transform': 'translateY(50px)', 'transition': 'all 0.8s ease-out'});
  
  $(window).scroll(function() {
    let windowBottom = $(window).scrollTop() + $(window).height();
    
    $('section').each(function() {
      let objectTriggerPoint = $(this).offset().top + 100; 
      
      if (windowBottom > objectTriggerPoint) {
        $(this).css({'opacity': '1', 'transform': 'translateY(0)'});
      }
    });
  });


  $('.card').css('position', 'relative');
  
  $('.card').mouseenter(function() {
    // Chain two animate commands to create a "bounce" effect (up, then down)
    $(this).animate({ top: "-15px" }, 200).animate({ top: "0px" }, 200);
  });

  
  $(window).scroll(function() {
    // Calculate the percentage of the page scrolled
    let scrollHeight = $(document).height() - $(window).height();
    let scrollPosition = $(window).scrollTop();
    let scrollPercentage = (scrollPosition / scrollHeight) * 100;
    
    // Apply the percentage to the width of the progress bar
    $('#scrollProgressBar').css('width', scrollPercentage + '%');
  });








  // TRAVERSING SECTION

  $('#team .col-md-4').click(function(event) {
    if ($(event.target).hasClass('delete-btn')) return;

    $(this).css({
      'border': '2px solid #e50914', 
      'border-radius': '15px',
      'box-shadow': '0 0 20px rgba(229, 9, 20, 0.5)',
      'transition': 'all 0.3s'
    });
    
    // Remove the highlight from the siblings 
    $(this).siblings().css({
      'border': 'none',
      'box-shadow': 'none'
    });

    let memberName = $(this).find('.member-name').text();
    alert("Director's Cut: You are viewing the profile of " + memberName + "!");
  });




  $('#screenings .card').first().css('border-top', '5px solid #ffc107'); // Yellow top border for the first card
  $('#screenings .card').last().css('border-top', '5px solid #0dcaf0');  // Blue top border for the last card


  $('.card').hover(
    function() {
      $(this).find('.card-title, h6').css({'color': '#e50914', 'transition': 'color 0.3s'});
    }, 
    function() {
      $(this).find('.card-title, h6').css('color', ''); // Revert to original color on mouse leave
    }
  );


  $('#screenings .card-body').append('<button class="btn btn-sm btn-outline-light mt-3 watched-btn">Mark as Watched</button>');
  
  $('.watched-btn').click(function(event) {
    event.stopPropagation(); 
    
    $(this).parent().css('background-color', '#2a2a2a');
    $(this).text('Watched ✓').removeClass('btn-outline-light').addClass('btn-success');
  });


  let totalCards = $('.card').length;
  
  $('#navbarNav ul').append(`
    <li class="nav-item ms-lg-4 d-flex align-items-center">
      <span class="badge bg-danger fs-6 shadow">Total Cards: ${totalCards}</span>
    </li>
  `);





// ADVANCED EFFECTS 

  let images = [
    "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop')", // Original Cinema
    "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop')", // Film Reel
    "url('https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop')"  // Movie Theater
  ];
  let currentImg = 0;
  
  setInterval(function() {
    currentImg = (currentImg + 1) % images.length;
    $('.hero-section').css({
      'background': `linear-gradient(to bottom, rgba(10, 10, 10, 0.2), #0a0a0a), ${images[currentImg]} center/cover no-repeat`,
      'transition': 'background 1s ease-in-out'
    });
  }, 5000); // Changes image every 5 seconds

  
  //as the user scrolls down, the background image moves slightly slower to create depth
  $(window).scroll(function() {
    let scrollPos = $(this).scrollTop();
    $('.hero-section').css('background-position', `center ${scrollPos * 0.4}px`);
  });

//typing animation
  let $heroTitle = $('.hero-section h1');
  let titleText = "Experience Cinema Like Never Before."; 
  $heroTitle.empty(); // Clear the static HTML text
  
  let typeIndex = 0;
  function typeWriter() {
    if (typeIndex < titleText.length) {
      $heroTitle.append(titleText.charAt(typeIndex));
      typeIndex++;
      setTimeout(typeWriter, 70); 
    }
  }
  setTimeout(typeWriter, 500); 

  setTimeout(function() {
    let myModal = new bootstrap.Modal(document.getElementById('cinemaModal'));
    myModal.show();
  }, 10000); // 10000ms = 10 seconds


  $('body').prepend('<div id="scrollProgressBar" style="position: fixed; top: 0; left: 0; height: 4px; background-color: #e50914; width: 0%; z-index: 1050;"></div>');
  
  $(window).scroll(function() {
    let scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
    $('#scrollProgressBar').css('width', scrollPercent + '%');
  });













  //SMART LOGIC / ADVANCED THINKING

  let hasLocked = false; // We use a flag so the lock only happens once per visit
  
  
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300 && !hasLocked) {
      hasLocked = true; // Flip the flag so it doesn't trigger again
      
      // Show the overlay using flexbox to keep it centered
      $('#lockOverlay').css('display', 'flex').hide().fadeIn('fast');
      
      // Setting overflow to hidden completely disables the scrollbar
      $('body').css('overflow', 'hidden'); 
    }
  });

  // The logic to remove the lock when the user clicks the button
  $('#unlockBtn').click(function() {
    $('#lockOverlay').fadeOut('fast');
    $('body').css('overflow', 'auto'); // Restores the scrollbar functionality
  });

//dark mode toggle using jQuery (Upgraded Class-Swapping Version)
  $('#navbarNav ul').append(`
    <li class="nav-item ms-lg-3 d-flex align-items-center">
      <button id="themeToggle" class="btn btn-sm btn-outline-light rounded-pill">🌓 Light Mode</button>
    </li>
  `);

  $('body').addClass('is-dark-mode');

  $('#themeToggle').click(function() {
    let isDark = $('body').hasClass('is-dark-mode');
    
    if (isDark) {
      $('body').removeClass('is-dark-mode').css({'background-color': '#f4f4f4', 'color': '#212529'});
      
      // Swap background classes
      $('.bg-dark').removeClass('bg-dark').addClass('bg-light');
      // Swap text classes
      $('.text-light').removeClass('text-light').addClass('text-dark');
      // Swap the navbar theme
      $('.navbar').removeClass('navbar-dark').addClass('navbar-light');
      // Change the button appearance
      $(this).text('🌘 Dark Mode').removeClass('btn-outline-light').addClass('btn-outline-dark');
      
    } else {
      $('body').addClass('is-dark-mode').css({'background-color': '', 'color': ''});
      
      // Swap background classes back
      $('.bg-light').removeClass('bg-light').addClass('bg-dark');
      // Swap text classes back
      $('.text-dark').removeClass('text-dark').addClass('text-light');
      // Swap the navbar theme back
      $('.navbar').removeClass('navbar-light').addClass('navbar-dark');
      // Change the button appearance
      $(this).text('🌓 Light Mode').removeClass('btn-outline-dark').addClass('btn-outline-light');
    }
  });
});
