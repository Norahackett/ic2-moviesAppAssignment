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
To run the app please update the .env file with your REACT_APP_TMDB_KEY


## App Design.
### Routing/Navigation.
I expanded the Movies App. See updated routes for the new featues below 

/tv/tv_series - displays the tv series from TV Discover

/tv/favourites - When you click the favurities button on the Tv series it adds the tv series to your favourities page 

/tv/:id -details information on a specific tv series.

/tvreviews/:id - lets you get a review of a specific tv series  

tvreviews/form - review form for writing your review on a tv series

/similarmovies/:id/ - there is a option on the movies home page to select similar movies and this brings up similar movies page

/movies/top_rated- lists top rated movies shown in cinemas



### Views/Pages.

Lists tv series from the Discover endpoint. Filtering on title and genre attributuies is supported. 

![][d1]

Details on the tv series - Genres, length of tv series, number of episodes, production countries. 

![][tvdetail]

You can add a tv series to your TV favourites page. There is a option here to remove or write a review on the TV series. 
There is also a Filter option "Filter". This will give you a review of the tv series. There is also a option to select Full review. 

![][tvF]

![][review]
![][fullreview]


In the Favourities Tv page there is a option to delete and write a review. Click on the write icon to  write a review   

![][writereview]

There is a page with the Top rated movies at the cinema

![][top_rated]


You can select similar movies on the home page. See "Check out similar movies" option on the home page

![][d2]

Once the "Check out similar movies" is selected it will bring you to Similar movies page. 

![][similar]


[d1]: ./public/images/tvdiscover1.png
[tvdetail]: ./public/images/tvdetail.png
[tvF]: ./public/images/favouritetv.png
[writereview]: ./public/images/tvreview.png
[top_rated]: ./public/images/toprated.png
[top_rated]: ./public/images/toprated.png
[d2]: ./public/images/discovermovies.png
[similar]: ./public/images/similarmovies.png
[fullreview]: ./public/images/fullreview.png
[review]: ./public/images/review.png