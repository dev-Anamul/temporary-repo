package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/google/uuid"
	"github.com/gorilla/mux"
)

type Movie struct {
	ID       string    `json:"id"`
	Isbn     string    `json:"isbn"`
	Title    string    `json:"title"`
	Year     int       `json:"released"`
	Director *Director `json:"director"`
}

type Director struct {
	FirstName string `json:"firstName"`
	LastName  string `json:"lastName"`
}

var movies []Movie

// get all movies
func getMovies(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(movies)
}

// get single movie
func getMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r) // get params
	// loop through movies and find id
	for _, item := range movies {
		if item.ID == params["id"] {
			json.NewEncoder(w).Encode(item)
			return
		}
	}
	// if not found
	json.NewEncoder(w).Encode(&Movie{})
}

// create new movie
func createMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var movie Movie
	_ = json.NewDecoder(r.Body).Decode(&movie)

	movie.ID = uuid.New().String()
	movies = append(movies, movie)
	json.NewEncoder(w).Encode(movie)
}

// update movie
func updateMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r) // get params
	// loop through movies and find id
	for index, item := range movies {
		if item.ID == params["id"] {
			movies = append(movies[:index], movies[index+1:]...)
			var movie Movie
			_ = json.NewDecoder(r.Body).Decode(&movie)

			movie.ID = params["id"]
			movies = append(movies, movie)
			json.NewEncoder(w).Encode(movie)
			return
		}
	}
	// if not found
	json.NewEncoder(w).Encode(movies)
}

// delete movie
func deleteMovie(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	params := mux.Vars(r) // get params
	// loop through movies and find id
	for index, item := range movies {
		if item.ID == params["id"] {
			movies = append(movies[:index], movies[index+1:]...)
			break
		}
	}
	// if not found
	json.NewEncoder(w).Encode(movies)
}

func main() {

	// create five dummy movies
	movies = append(movies, Movie{ID: "1", Isbn: "123456", Title: "Movie One", Year: 2019, Director: &Director{FirstName: "John", LastName: "Doe"}})
	movies = append(movies, Movie{ID: "2", Isbn: "123457", Title: "Movie Two", Year: 2018, Director: &Director{FirstName: "Steve", LastName: "Smith"}})
	movies = append(movies, Movie{ID: "3", Isbn: "123458", Title: "Movie Three", Year: 2017, Director: &Director{FirstName: "Kathy", LastName: "Bates"}})
	movies = append(movies, Movie{ID: "4", Isbn: "123459", Title: "Movie Four", Year: 2016, Director: &Director{FirstName: "Jane", LastName: "Doe"}})
	movies = append(movies, Movie{ID: "5", Isbn: "123460", Title: "Movie Five", Year: 2015, Director: &Director{FirstName: "Mary", LastName: "Jane"}})

	// initialize router
	r := mux.NewRouter()
	r.HandleFunc("/api/movies", getMovies).Methods("GET")
	r.HandleFunc("/api/movies", createMovie).Methods("POST")
	r.HandleFunc("/api/movies/{id}", getMovie).Methods("GET")
	r.HandleFunc("/api/movies/{id}", updateMovie).Methods("PUT")
	r.HandleFunc("/api/movies/{id}", deleteMovie).Methods("DELETE")

	// start server
	fmt.Println("Server running on port 8000")
	log.Fatal(http.ListenAndServe(":8000", r))
}
