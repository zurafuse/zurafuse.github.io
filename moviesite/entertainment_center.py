import site_generator
import media

wonder_woman = media.Movie("Wonder Woman", "Description", "https://upload.wikimedia.org/wikipedia/en/e/ed/Wonder_Woman_%282017_film%29.jpg",
                           "https://www.youtube.com/watch?v=VSB4wGIdDwo", '<iframe width="854" height="480" src="https://www.youtube.com/embed/VSB4wGIdDwo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')

guardians_of_galaxy = media.Movie("Guardians of the Galaxy", "Description", "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/GOTG-poster.jpg/220px-GOTG-poster.jpg",
                                  "https://www.youtube.com/watch?v=d96cjJhvlMA", '<iframe width="854" height="480" src="https://www.youtube.com/embed/d96cjJhvlMA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')

guardians_of_galaxy2 = media.Movie("Guardians of the Galaxy Vol 2", "Description", "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/GotG_Vol2_poster.jpg/220px-GotG_Vol2_poster.jpg",
                                   "https://www.youtube.com/watch?v=2cv2ueYnKjg", '<iframe width="854" height="480" src="https://www.youtube.com/embed/2cv2ueYnKjg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')

spiderman = media.Movie("Spider-Man: Homecoming", "2017 American superhero film based on the Marvel Comics character Spider-Man", "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Spider-Man_Homecoming_poster.jpg/220px-Spider-Man_Homecoming_poster.jpg",
                        "https://www.youtube.com/watch?v=oNE0zRNyXuc", '<iframe width="640" height="360" src="https://www.youtube.com/embed/oNE0zRNyXuc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')

man_of_steel = media.Movie("Man of Steel", "2013 superhero film featuring the DC Comics character Superman", "images/man_of_steel.jpg",
                        "https://www.youtube.com/watch?v=T6DJcgm3wNY", '<iframe width="640" height="360" src="https://www.youtube.com/embed/T6DJcgm3wNY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')

batman_vs_superman = media.Movie("Batman v Superman: Dawn of Justice", "2016 American superhero film featuring the DC Comics characters Batman and Superman", "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Batman_v_Superman_poster.jpg/220px-Batman_v_Superman_poster.jpg",
                        "https://www.youtube.com/watch?v=fis-9Zqu2Ro", '<iframe width="854" height="480" src="https://www.youtube.com/embed/fis-9Zqu2Ro" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')

justice_league = media.Movie("Justice League", "2017 American superhero film based on the DC Comics superhero team", "https://upload.wikimedia.org/wikipedia/en/3/31/Justice_League_film_poster.jpg",
                        "https://www.youtube.com/watch?v=r9-DM9uBtVI", '<iframe width="640" height="360" src="https://www.youtube.com/embed/r9-DM9uBtVI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')

dbz_rezF = media.Movie("Dragon Ball Z: Resurrection F", "Description", "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/DBZ_THE_MOVIE_NO._15.png/220px-DBZ_THE_MOVIE_NO._15.png",
                        "https://www.youtube.com/watch?v=WiONylGn8Xw", '<iframe width="854" height="480" src="https://www.youtube.com/embed/WiONylGn8Xw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')

incredibles2 = media.Movie("The Incredibles 2", "2nd installment of the Pixar super hero film.", "https://upload.wikimedia.org/wikipedia/en/2/27/The_Incredibles_2.jpg",
                        "https://www.youtube.com/watch?v=2_VhcvodRBY", '<iframe width="640" height="360" src="https://www.youtube.com/embed/2_VhcvodRBY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')					
						

movies = [wonder_woman, guardians_of_galaxy, guardians_of_galaxy2, spiderman, man_of_steel, batman_vs_superman, justice_league, dbz_rezF, incredibles2]

site_generator.open_movies_page(movies)
