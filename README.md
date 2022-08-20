# ICT Skills 2 Assignment.
Name: Nora Hackett

## Overview.
I expanded the movies app from assignment 1 to include the following additional features- TV series, Similar movies and Top Rated movies. It also gives details on the TV series 

List - Similar Movies 
List - Tv Series 
List - Top Rated Movies 
Detail - TV series Details 
Also has TV favourities and review the Tv Series 

## Setup requirements.
To run the app please update the .env with your REACT_APP_TMDB_KEY


## App Design.
### Routing/Navigation.
I expanded the Movies App. See updated routes for the new featues below 


/tv/favourites - displays your tv series favourites on the favourities page 

/similarmovies/:id/ - details similar moves to the movie dispalyed on the home page

/tvreviews/:id - lets you write a review on a specific tv series 

/tv/tv_series - displays all the tv series on the Tv series page

/tv/:id -detailed information on a specific tv series.

tvreviews/form - review form for writing your review on a tv series

/movies/top_rated- lists top rated movies shown in cinemas

/movies/:id - detailed information on a specific movie.

/movies/upcoming - lists movies soon to be shown in cinemas.

### Views/Pages.

Lists tv series from the Discover endpoint. Filtering on title and genre attributuies is supported. 

![][d1]

Details on the tv series 

![][tvdetail]

You can add a tv series to a TV favourites page. There is a option here to remove or write a review on the TV series.

![][tvF]


Write a review 

![][review]

There is a page for Top rated movies

![][top_rated]


You can select similar movies on the home page. See button to click circled in red

![][d2]

Similar movies page displayed 

![][similar]



[d1]: ./public/images/tvdiscover1.png
[tvdetail]: ./public/images/tvdetail.png
[tvF]: ./public/images/favouritetv.png
[review]: ./public/images/tvreview.png
[top_rated]: ./public/images/toprated.png
[top_rated]: ./public/images/toprated.png
[d2]: ./public/images/discovermovies.png
[similar]: ./public/images/similarmovies.png