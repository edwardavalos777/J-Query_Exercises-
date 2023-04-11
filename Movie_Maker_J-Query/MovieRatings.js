
$(document).ready(function() {
// initialize empty array to hold movie data
let movies = [];

// function to add a movie to the DOM
function addMovieToDOM(movie) {
	// create HTML elements for movie title, rating, and remove button
    let titleElement = $('<span>').text(movie.title);
	let ratingElement = $('<span>').text(movie.rating);
	let removeButton = $('<button>').text('Remove');

	// add click handler to remove button
	    removeButton.click(function() {
		// remove movie from array
		let index = movies.indexOf(movie);
			if (index !== -1) {
				movies.splice(index, 1);
				}

		// remove movie from DOM
			movieElement.remove();
				});

	// create container element for movie data
		let movieElement = $('<div>').addClass('movie');
		movieElement.append(titleElement, ratingElement, removeButton);

		// add container element to DOM
		$('#movieList').append(movieElement);
			}

	// function to sort movies by title
		function sortByTitle() {
		    movies.sort(function(a, b) {
				return a.title.localeCompare(b.title);
				});
				$('#movieList').empty();
				movies.forEach(function(movie) {
					addMovieToDOM(movie);
				});
			}

	// function to sort movies by rating
		function sortByRating() {
			movies.sort(function(a, b) {
					return a.rating - b.rating;
				});
				$('#movieList').empty();
				movies.forEach(function(movie) {
					addMovieToDOM(movie);
				});
			}

	// function to handle form submission
			$('#addMovieForm').submit(function(event) {
				event.preventDefault();

				// get values from form inputs
				let title = $('#titleInput').val().trim();
				let rating = parseInt($('#ratingInput').val());

				// validate inputs
				if (title.length < 2) {
					alert('Title must be at least 2 characters');
					return;
				}
				if (rating < 0 || rating > 10) {
					alert('Rating must be between 0 and 10');
					return;
				}

				// create movie object
				let movie = {
					title: title,
					rating: rating
				};

				// add movie to array and DOM
				movies.push(movie);
				addMovieToDOM(movie);

				// clear form inputs
				$('#titleInput').val('');
				$('#ratingInput').val('');
			});

			// add click handlers to sort buttons
			$('#sortByTitleButton').click(sortByTitle);
			$('#sortByRatingButton').click(sortByRating);
			$('#sortByTitleReverseButton').click(function() {
				sortByTitle();
				$('#movieList').append($('#movieList > div').get().reverse());
			});
			$('#sortByRatingReverseButton').click(function() {
				sortByRating();
				$('#movieList').append($('#movieList > div').get().reverse());
			});
		});
