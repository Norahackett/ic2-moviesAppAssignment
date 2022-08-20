# moviesapp-ci-2021


#ICT Skills 2 Assignment.
Name: Nora Hackett

##Overview.
I expanded the movies app from assignment 1 to include the following additional features- TV series, Similar movies and Top Rated movies. It also gives details on the TV series 



List - Similar Movies 
List - Tv Series 
List - Top Rated Movies 
Detail - TV series Details 
Also has TV favourities and review the Tv Series 

Setup requirements.
To run the app please update the .env with your REACT_APP_TMDB_KEY


App Design.
Routing/Navigation.
I expanded the Movies App. See updated routes for the new featues below 

e.g.


/tv/favourites - displays your tv series favourites on the favourities page 
/similarmovies/:id/ - details similar moves to the movie dispalyed on the hoem page
/tvreviews/:id - lets you write a review on a specifice tv series 
/tv/tv_series - displays all the tv series on the Tv series page
/tv/:id -detailed information on a specific tv series.
tvreviews/form - 
/movies/top_rated- lists top rated movies shown in cinemas

/movies/:id - detailed information on a specific movie.
/movies/upcoming - lists movies soon to be shown in cinemas.
etc.
etc.
Views/Pages.
[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.

Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.





Shows detailed information on a specific movie



Component catalogue.
[ Use the Storybook UI to highlight the new components for which you developed stories.] e.g.



Caching.
[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.

Discover movies (pagination support)
Movie details
etc
etc


Authentication (if relevant).
[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.

/reviews/:id
/movies/favourites
Server-side persistence (if relevant)
[ Specify the persistence platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

Additional features (if relevant),
[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

Independent learning (if relevant),
[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]