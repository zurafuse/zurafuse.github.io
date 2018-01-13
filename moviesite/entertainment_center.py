import site_generator
import media

toy_story = media.Movie("Toy Story", "A movie about a boy and his toys which come to life when he is not looking.",
                        "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Toy_Story.jpg/220px-Toy_Story.jpg",
                        "https://www.youtube.com/watch?v=KYz2wyBy3kc")

#toy_story2 = media.Movie()

#toy_story3 = media.Movie()

avatar = media.Movie("Avatar", "A movie about a bunch of marines stranded on an alien planet.",
                        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg",
                        "https://www.youtube.com/watch?v=d1_JBMrrYw8")

meatballs = media.Movie("Cloudy with a Chance of Meatballs", "Flint Lockwood, a young science enthusiast on an island called Swallow Falls, has developed a machine capable of materializing everyone's favorite food.",
                        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Cloudy_with_a_chance_of_meatballs_theataposter.jpg/220px-Cloudy_with_a_chance_of_meatballs_theataposter.jpg",
                        "https://www.youtube.com/watch?v=pUaKcFI4BZY")

#meatballs2 = media.Movie()

#dbz_rezF = media.Movie()

#hunger_games = media.Movie()

movies = [toy_story, avatar, meatballs]

site_generator.open_movies_page(movies)
