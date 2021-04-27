$(document).ready(function () {
  // var $ul = $('#favorite-links');
  // var $title = $('#title');
  // //var $url = $('#url');

  // //get items from local storage
  // if (localStorage.getItem('vk-links')) {
  //     $ul.html(localStorage.getItem('vk-links'));
  // }

  // // add nwe item
  // $('#add').click(function () {

  //     //add new item
  //     //$('#favorite-links').append('<li><a href="">'+$title.val()+'</a><button class="removebtn">x</button></li>');
  //     $('#favorite-links').append('<div class="table-row"> <div class="table-row-column table-row-index"><p><strong>' + $title.val() + '</strong></p></div><div class="row-grid-view grid-actions"> <div id="actionsListOpen" class="actionsListOpen card-shadow"> <img class="closeActions" id="closeActions" alt="" src="images/close.svg"/> <ul class="listActions"> <li> <a href="edit-datastore.html" class="link-list"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.06 8.99988L15 9.93988L5.92 18.9999H5V18.0799L14.06 8.99988ZM17.66 2.99988C17.41 2.99988 17.15 3.09988 16.96 3.28988L15.13 5.11988L18.88 8.86988L20.71 7.03988C21.1 6.64988 21.1 5.99988 20.71 5.62988L18.37 3.28988C18.17 3.08988 17.92 2.99988 17.66 2.99988ZM14.06 6.18988L3 17.2499V20.9999H6.75L17.81 9.93988L14.06 6.18988Z" fill="#2995F5"/> </svg> <span>Edit</span> </a> </li><!-- <li> <a href="" class="link-delete"> <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg"> <path d="M9 2.99988V3.99988H4V5.99988H5V18.9999C5 19.5303 5.21071 20.039 5.58579 20.4141C5.96086 20.7892 6.46957 20.9999 7 20.9999H17C17.5304 20.9999 18.0391 20.7892 18.4142 20.4141C18.7893 20.039 19 19.5303 19 18.9999V5.99988H20V3.99988H15V2.99988H9ZM7 5.99988H17V18.9999H7V5.99988ZM9 7.99988V16.9999H11V7.99988H9ZM13 7.99988V16.9999H15V7.99988H13Z" fill="#E04545"/> </svg> <span>Delete</span> </a> </li>--> </ul> </div><a class="btnActions"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4V4Z" fill="#2995F5"/> </svg> </a> </div><div class="table-row-column table-center row-grid-view grid-title">SOURCE</div><div class="table-row-column table-center sa-type-link">172.16.18.125\sqlexpress</div><div class="table-row-column table-center row-list-view action-width"> <a href="edit-datastore.html"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.06 8.99988L15 9.93988L5.92 18.9999H5V18.0799L14.06 8.99988ZM17.66 2.99988C17.41 2.99988 17.15 3.09988 16.96 3.28988L15.13 5.11988L18.88 8.86988L20.71 7.03988C21.1 6.64988 21.1 5.99988 20.71 5.62988L18.37 3.28988C18.17 3.08988 17.92 2.99988 17.66 2.99988ZM14.06 6.18988L3 17.2499V20.9999H6.75L17.81 9.93988L14.06 6.18988Z" fill="#2995F5"/> </svg> </a><img alt="" src="images/delete.svg" class="removebtn" /> </div></div>');

  //     localStorage.setItem("title", JSON.stringify(title));

  //     //save changes to localstorage
  //     localStorage.setItem('vk-links', $ul.html());

  //     //reset form
  //     $title.val("");
  //     //$url.val("http://");      
  // });

  // //remove item
  // $("#favorite-links").on('click', '.removebtn', function () {
  //     $(this).parents(".table-row").remove();
  //     //save changes to localstorage
  //     localStorage.setItem('vk-links', $ul.html());
  // });

  //guardar_localstorage();
  //obtener_localstorage();

  function guardar_localstorage() {
    let persona = {
      nombre: "Fernando",
      edad: "33",
    };

    let nombre = "Pedro";

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify(persona));
  }

  function obtener_localstorage() {
    

    if (localStorage.getItem("nombre")) {
      let nombre = localStorage.getItem("nombre");
      let persona = JSON.parse(localStorage.getItem("persona"));

      $('#favorite-links').append('<div class="table-row"> <div class="table-row-column table-row-index"><p><strong>' + nombre + '</strong></p></div><div class="row-grid-view grid-actions"> <div id="actionsListOpen" class="actionsListOpen card-shadow"> <img class="closeActions" id="closeActions" alt="" src="images/close.svg"/> <ul class="listActions"> <li> <a href="edit-datastore.html" class="link-list"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.06 8.99988L15 9.93988L5.92 18.9999H5V18.0799L14.06 8.99988ZM17.66 2.99988C17.41 2.99988 17.15 3.09988 16.96 3.28988L15.13 5.11988L18.88 8.86988L20.71 7.03988C21.1 6.64988 21.1 5.99988 20.71 5.62988L18.37 3.28988C18.17 3.08988 17.92 2.99988 17.66 2.99988ZM14.06 6.18988L3 17.2499V20.9999H6.75L17.81 9.93988L14.06 6.18988Z" fill="#2995F5"/> </svg> <span>Edit</span> </a> </li><!-- <li> <a href="" class="link-delete"> <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg"> <path d="M9 2.99988V3.99988H4V5.99988H5V18.9999C5 19.5303 5.21071 20.039 5.58579 20.4141C5.96086 20.7892 6.46957 20.9999 7 20.9999H17C17.5304 20.9999 18.0391 20.7892 18.4142 20.4141C18.7893 20.039 19 19.5303 19 18.9999V5.99988H20V3.99988H15V2.99988H9ZM7 5.99988H17V18.9999H7V5.99988ZM9 7.99988V16.9999H11V7.99988H9ZM13 7.99988V16.9999H15V7.99988H13Z" fill="#E04545"/> </svg> <span>Delete</span> </a> </li>--> </ul> </div><a class="btnActions"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4V4Z" fill="#2995F5"/> </svg> </a> </div><div class="table-row-column table-center row-grid-view grid-title">SOURCE</div><div class="table-row-column table-center sa-type-link">172.16.18.125\sqlexpress</div><div class="table-row-column table-center row-list-view action-width"> <a href="edit-datastore.html"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.06 8.99988L15 9.93988L5.92 18.9999H5V18.0799L14.06 8.99988ZM17.66 2.99988C17.41 2.99988 17.15 3.09988 16.96 3.28988L15.13 5.11988L18.88 8.86988L20.71 7.03988C21.1 6.64988 21.1 5.99988 20.71 5.62988L18.37 3.28988C18.17 3.08988 17.92 2.99988 17.66 2.99988ZM14.06 6.18988L3 17.2499V20.9999H6.75L17.81 9.93988L14.06 6.18988Z" fill="#2995F5"/> </svg> </a><img alt="" src="images/delete.svg" class="removebtn" /> </div></div>');

    }
    else {
      console.log("nada");
    }
  }

  $('#add').click(function () {
    let persona = {
      nombre: "Fernando",
      edad: "33",
    };

    let nombre = $('#nombre').val();

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify(persona));

    $('#favorite-links').append('<div class="table-row"> <div class="table-row-column table-row-index"><p><strong>' + nombre + '</strong></p></div><div class="row-grid-view grid-actions"> <div id="actionsListOpen" class="actionsListOpen card-shadow"> <img class="closeActions" id="closeActions" alt="" src="images/close.svg"/> <ul class="listActions"> <li> <a href="edit-datastore.html" class="link-list"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.06 8.99988L15 9.93988L5.92 18.9999H5V18.0799L14.06 8.99988ZM17.66 2.99988C17.41 2.99988 17.15 3.09988 16.96 3.28988L15.13 5.11988L18.88 8.86988L20.71 7.03988C21.1 6.64988 21.1 5.99988 20.71 5.62988L18.37 3.28988C18.17 3.08988 17.92 2.99988 17.66 2.99988ZM14.06 6.18988L3 17.2499V20.9999H6.75L17.81 9.93988L14.06 6.18988Z" fill="#2995F5"/> </svg> <span>Edit</span> </a> </li><!-- <li> <a href="" class="link-delete"> <svg width="24" height="24" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg"> <path d="M9 2.99988V3.99988H4V5.99988H5V18.9999C5 19.5303 5.21071 20.039 5.58579 20.4141C5.96086 20.7892 6.46957 20.9999 7 20.9999H17C17.5304 20.9999 18.0391 20.7892 18.4142 20.4141C18.7893 20.039 19 19.5303 19 18.9999V5.99988H20V3.99988H15V2.99988H9ZM7 5.99988H17V18.9999H7V5.99988ZM9 7.99988V16.9999H11V7.99988H9ZM13 7.99988V16.9999H15V7.99988H13Z" fill="#E04545"/> </svg> <span>Delete</span> </a> </li>--> </ul> </div><a class="btnActions"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"> <path d="M12 16C12.5304 16 13.0391 16.2107 13.4142 16.5858C13.7893 16.9609 14 17.4696 14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18C10 17.4696 10.2107 16.9609 10.5858 16.5858C10.9609 16.2107 11.4696 16 12 16ZM12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10ZM12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6C14 6.53043 13.7893 7.03914 13.4142 7.41421C13.0391 7.78929 12.5304 8 12 8C11.4696 8 10.9609 7.78929 10.5858 7.41421C10.2107 7.03914 10 6.53043 10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4V4Z" fill="#2995F5"/> </svg> </a> </div><div class="table-row-column table-center row-grid-view grid-title">SOURCE</div><div class="table-row-column table-center sa-type-link">172.16.18.125\sqlexpress</div><div class="table-row-column table-center row-list-view action-width"> <a href="edit-datastore.html"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M14.06 8.99988L15 9.93988L5.92 18.9999H5V18.0799L14.06 8.99988ZM17.66 2.99988C17.41 2.99988 17.15 3.09988 16.96 3.28988L15.13 5.11988L18.88 8.86988L20.71 7.03988C21.1 6.64988 21.1 5.99988 20.71 5.62988L18.37 3.28988C18.17 3.08988 17.92 2.99988 17.66 2.99988ZM14.06 6.18988L3 17.2499V20.9999H6.75L17.81 9.93988L14.06 6.18988Z" fill="#2995F5"/> </svg> </a><img alt="" src="images/delete.svg" class="removebtn" /> </div></div>');  
    obtener_localstorage();
  });
});


