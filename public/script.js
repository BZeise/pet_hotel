$(document).ready(function() {
  $('#register').on('click', registerOwner);
  $('#addPet').on('click', petDetails);

  updateDropdown();
});

function updateDropdown() {
  $.ajax({
    url: '/dropdown',
    type: 'GET',
    success: function(response){
      console.log( 'got some DUROPODOWNOOOO: ', response);
      for (var i = 0; i < response.length; i++) {
        var ownFirst = response[i].owner_first;
        var ownLast = response[i].owner_last;
        var underscoreName = ownFirst + ownLast;
        var fullName = ownFirst + ' ' + ownLast;
        console.log('full names are: ' + underscoreName + ', ' + fullName);
        var toAppend = "<option>" + fullName + "</option>";
        $('#ownerName').append(toAppend);
      } // end for loop
    } // end success
  }); //end ajax
};

function registerOwner() {
  console.log( 'in registerOwner on click' );
  var ownerName = {
    firstName: $('#firstName').val(),
    lastName: $('#lastName').val()
  };
  $.ajax({
    url: '/register',
    type: 'POST',
    data: ownerName,
    success: function( data ){
      console.log( 'got some koalas: ', data );
      updateDropdown();
    } // end success
  }); //end ajax
};

function petDetails() {
  console.log( 'in petInfo on click' );
  console.log($('#ownerName').val());
  var petInfo = {
    petName: $('#petName').val(),
    breed: $('#breed').val(),
    color: $('#color').val()
  };
  $.ajax({
    url: '/petStuff',
    type: 'POST',
    data: petInfo,
    success: function( data ){
      console.log( 'got some pets: ', data );
    } // end success
  }); //end ajax
};
