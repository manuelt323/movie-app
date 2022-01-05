let currentId = 0;

$(function () {
  $('.form').on('submit', function (e) {
    e.preventDefault();
    let title = $('#movie-title').val();
    let rating = $('#rating').val();

    let movieData = { title, rating, currentId };
    let HTMLtoAppend = createMovieDataHTML(movieData);

    currentId++;

    $('.table-body').append(HTMLtoAppend);
    $('.form').trigger('reset');
  });

  $('tbody').on('click', '.btn', function (e) {
    $(e.target).closest('tr').remove();
  });
});

function createMovieDataHTML(data) {
  return `
    <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td><button class="btn" data-delete-id = ${data.currentId}>Delete</button></td>
    <tr>

    `;
}
