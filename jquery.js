//this function indicates that first the page is load after our code is executed and short form od this is $(function(){})
$(document).ready(function () {
    //there are 3 main types of selector: 1) element selector 2) id selector 3) class selector 
    //$('selector').action()
    // $('p').click()  1) element selector

    $('p').click(function () {
        console.log("you click on me", this);
        // $('p').hide(); //hide p tag text
        // $(this).hide();// hide clicked element
        //  $("#id").hide();
        //  $(".class").hide();
    });
    // $('p').hover(function () {
    //     console.log("you hover on me", this);});

    // $('p').on(
    //     {
    //         click:function(){
    //             console.log("click on me",this);
    //         }

    //     }
    // )

    // $('#second').click(); //id selector
    // $('#odd').click(); // class selector
    // $('*').click(); // select all the elements
    // $('p:first').click(); // click first p

    //events in jquery
    //mouse event: click, dblclick,mouseenter, mouseleave
    //keyborad event : keypress, keydown, meidakeyStatusMap
    //from ewvents : submit, change , focus , blur
    // document/window  events = load, resize , scroll , unload

    // Show and hide 
    // $('#para').hide(2000,function(){
    //     console.log("hidden");
    // }); //para id
    // $('#para').show(2000,function(){
    //     console.log("show");

    // });

    // toggle function means if element is hide then show it and visa versa
       $('#btn').click(function () {

    //     // $('#para').toggle(2000);
    //     // $('#para').fadeOut(2000); // take 2 sec to hide
    //     // $('#para').fadeIn(2000);  // take 2 sec to show
    //     // $('#para').fadeToggle(2000);
    //     // $('#para').fadeTo(2000);


    //      // slide method -  speed and callback method is optional
    //     // $('#para').slideUp(2000);
    //     // $('#para').slideDown(2000);
    //     $('#para').slideToggle(2000);

      // animation function
//       $('#para').animate({
//         opactiy:0.5,
//         height:'150px',
//         width:'350px'
//     },2000)

//queue method
// $('#para').animate({opactiy:0.2},7000);
// $('#para').animate({height:'150px'},4000);
// $('#para').animate({ width:'350px'},6000);
// $('#para').animate({opactiy:0.2},7000);

// form method
// $('#txt').val(); // get value
// $('#txt').val("apeksha"); // set value 
// $('#txt').empty(); // empty the elemnt  
// $('#txt').text("sorry"); // set value
// $('#para').remove(); // remove the elemnt  
// $('#para').addClass('para1')
// $('#para').removeClass('para1')
// $('#para').toggleClass('para1')
// $('#para').css('background-color','red'); // use css 

 });

 //ajax using jquery
//  $.get('https://code.jquery.com/jquery-3.6.3.js',function(data,status){alert(data);})
//  $.post('url',{name:'appu',channel:'zignuts'},function(data,status){alert(data);})








});