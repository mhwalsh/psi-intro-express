console.log('test');

// var songArr = [];

$(document).ready(docReady);

function docReady() {
  console.log('doc ready');

  //event listener
  $('#add-song').on('click', addSong);
}

// add Song function
function addSong() {
  console.log('in addSong');
  var songName = $('#song-name').val();
  console.log('songName ->', songName);

  var objectToSend = {
    name: songName
  };

  $.ajax({
    method: 'POST',
    url: '/song',
    data: objectToSend,
    success: function(response) {
      console.log(response);
      // displayTitle(response);
      }
  });

  $.ajax({
    method: 'GET',
    url: '/',
    data: objectToSend,
    success: function(response) {
      console.log(response);
      // displayTitle(response);
      }
  });
  // function displayTitle(fooJim) {
  //   console.log('in displayTitle ->', displayTitle);
  //   // var songName = String($('#song-name').val());
  //   // songArr = songArr.push(songName);
  //   // console.log('this is songArr ->', songArr);
  //   // $('.container').append('<div>' + songName + '</div>');
  // }

}
