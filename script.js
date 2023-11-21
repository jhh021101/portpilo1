function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
};





// 모바일 헤더

window.addEventListener("load", function() {
    (function($) {
        $(function () {
            // If a link has a dropdown, add sub menu toggle.
            $('.menuhead:not(:only-child)').click(function (e) {
                $(this).siblings('.submenu').slideToggle();
                // Close one dropdown when selecting another
                $('.submenu').not($(this).siblings()).hide();
                e.stopPropagation();
            });


            // Clicking away from dropdown will remove the dropdown class
            $('html').click(function () {
                $('.submenu').hide();
            });


            $('.mobil_hd').click(function () {
                $('.gnb').slideToggle();
                $('body').toggleClass('bodyfixed');
            });
            // Hamburger to X toggle
            $('.mobil_hd').on('click', function () {
                this.classList.toggle('openNav');
            });
        }); // end DOM ready
    })(jQuery); // end jQuery
})





// 모바일 슬라이드
window.addEventListener("load", function() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, 
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});
})



// 아시아나와 함께하는 즐거운 여행
window.addEventListener("load", function() {
  $(document).ready(function(){
    $('.ticket_tab_btn li').click(function(){
        var value = $(this).find('a').attr('href');
        $('.ticket_tab_container .ticket_content').hide();
        $('.ticket_tab_container').find(value).show();
        $(this).addClass('ticket_active').siblings().removeClass('ticket_active')
        return false;
    });
});
})



// 달력 스타일 js
window.addEventListener("load", function () {
  var dateSelector = document.querySelector('.dateSelector');
    dateSelector.flatpickr();
    var dateSelector = document.querySelector('.dateSelector');
    dateSelector.flatpickr({
        enable: [
            //몇개 적을일 없는 경우
            "2025-06-08", new Date(2025, 8, 9),
            //기간
            {
                from: "2023-03-01",
                to: "2023-12-31"
            },
            //이번달 15일 이내
            function (date) {
                // return true to enable
                return (date.getMonth() % 2 === 0 && date.getDate() < 30);
            }
        ],
        dateFormat: "Y-m-d",
    });
    flatpickr.localize(flatpickr.l10ns.ko);
    flatpickr(dateSelector);
    var dateSelector = document.querySelector('.dateSelector');
    dateSelector.flatpickr({
        mode: "range",
        minDate: "today",
        maxDate: "2023-12-31",
        local: 'ko',
        dateFormat: "Y-m-d",
    });
}) 





// 최저가 간편 조회
window.addEventListener("load", function() {
  var swiper1 = new Swiper(".special_box", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); 
})   




// 다양한 여행 정보를 만나보세요
window.addEventListener("load", function() {
  $(document).ready(function(){

    $('.asiana_pick_btn li').click(function(){
      var value = $(this).find('a').attr('href');
      $('.tab_container .content').hide(); 
      $('.tab_container').find(value).show();
      $(this).addClass('active').siblings().removeClass('active'); 
      return false; 
    });
  });  
})
      
      

    // 이벤트 슬라이드
window.addEventListener("load", function() {
    var swiper2 = new Swiper(".event", {
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
})



    // News 페이지 넘버
window.addEventListener("load", function() {
  const tagList = document.querySelectorAll(".page > p");
  for (let i = 0; i < tagList.length; i++) {
    tagList[i].addEventListener("click", function() {
      clearPage();
      this.classList.add("checkpage");
    });
  }

  function clearPage() {

    for (let i = 0; i < tagList.length; i++) {
      tagList[i].classList.remove("checkpage");
    }
  }
});


// fqa 리스트 탭
window.addEventListener("load", function() {
    const tapList = document.querySelectorAll(".listtap > li");
    for (let i = 0; i < tapList.length; i++) {
      tapList[i].addEventListener("click", function() {
        cleartap();
        this.classList.add("tapsee");
        if (i == 0) {
          document.getElementById("list1").style.display = "block";
          document.getElementById("list2").style.display = "none";
          document.getElementById("list3").style.display = "none";
          document.getElementById("list4").style.display = "none";
        } else if (i == 1) {
          document.getElementById("list1").style.display = "none";
          document.getElementById("list2").style.display = "block";
          document.getElementById("list3").style.display = "none";
          document.getElementById("list4").style.display = "none";
        } else if (i == 2) {
          document.getElementById("list1").style.display = "none";
          document.getElementById("list2").style.display = "none";
          document.getElementById("list3").style.display = "block";
          document.getElementById("list4").style.display = "none";
        } else if (i == 3) {
          document.getElementById("list1").style.display = "none";
          document.getElementById("list2").style.display = "none";
          document.getElementById("list3").style.display = "none";
          document.getElementById("list4").style.display = "block";
        }
      });
    }
  
    function cleartap() {
  
      for (let i = 0; i < tapList.length; i++) {
        tapList[i].classList.remove("tapsee");
      }
    }
  });



  

// 로그인 탭
  $(document).ready(function(){
    $('.login_tab_btn li').click(function(){
        var value = $(this).find('a').attr('href');
        $('.login_tab_container .login_content').hide();
        $('.login_tab_container').find(value).show();
        $(this).addClass('login_active').siblings().removeClass('login_active')
        return false;
    });
});
  

// fqa 리스트 아코디언

window.addEventListener("load", function() {
  const List = document.querySelectorAll(".listq");
  for (let i = 0; i < List.length; i++) {
    List[i].addEventListener("click", function() {
      clearlist();
      var panel = this.nextElementSibling;
      panel.classList.add("listsee");
    });
  }

  function clearlist() {
    for (let i = 0; i < List.length; i++) {
      var panel = List[i].nextElementSibling;
      panel.classList.remove("listsee");
    }
  }
});


// faq 페이지 넘버
window.addEventListener("load", function() {
  const tagList = document.querySelectorAll(".faq-page > p");
  for (let i = 0; i < tagList.length; i++) {
    tagList[i].addEventListener("click", function() {
      clearPage();
      this.classList.add("faq-checkpage");
    });
  }

  function clearPage() {

    for (let i = 0; i < tagList.length; i++) {
      tagList[i].classList.remove("faq-checkpage");
    }
  }
});




window.addEventListener("load", function() {
  $(document).ready(function(){
    $('.popupopen').click(function(){
        $('.popup').fadeIn(0);
    });

    $('.popup a').click(function(){
        $('.popup').fadeOut(0);
    });
});
})




window.addEventListener("load", function() {
  function count(type)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById('result');
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }
})