//FIRST PROGRESSBAR//
function Circle_1(el){
    $(el).circleProgress({fill: {color: '#7E57C2'}})
      .on('circle-animation-progress', function(event, progress, stepValue){
   $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
   });  
  };
  Circle_1('.round-1');

//SECOND PROGRESSBAR//
  function Circle_2(el){
    $(el).circleProgress({fill: {color: '#d74680'}})
      .on('circle-animation-progress', function(event, progress, stepValue){
   $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
   });  
  };
  Circle_2('.round-2');

//THIRD PROGRESSBAR//
  function Circle_3(el){
    $(el).circleProgress({fill: {color: '#15c7a8'}})
      .on('circle-animation-progress', function(event, progress, stepValue){
   $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
   });  
  };
  Circle_3('.round-3');

  //FOURTH PROGRESSBAR//
  function Circle_4(el){
    $(el).circleProgress({fill: {color: '#eb7d4b'}})
      .on('circle-animation-progress', function(event, progress, stepValue){
   $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
   });  
  };
  Circle_4('.round-4');