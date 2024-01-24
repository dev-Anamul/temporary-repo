package main

import (
	"fmt"
	"net/http"
)

func helloFunc(w http.ResponseWriter, r *http.Request) {

	if r.URL.Path != "/hello" {
		http.Error(w, "Resource not found", http.StatusNotFound)
		return
	}

	if r.Method != "GET" {
		http.Error(w, "Method is not supported.", http.StatusNotFound)
		return
	}

	fmt.Fprintf(w, "Hello World")
}

func jsonFunc(w http.ResponseWriter, r *http.Request) {

	formData := r.ParseForm()

	if formData != nil {
		http.Error(w, "Error parsing form", http.StatusNotFound)
		return
	}

	if r.URL.Path != "/sign-up" {
		http.Error(w, "Resource not found", http.StatusNotFound)
		return
	}

	if r.Method != "POST" {
		http.Redirect(w, r, "/signup.html", http.StatusSeeOther)
		return
	}

	username := r.FormValue("username")
	password := r.FormValue("password")

	fmt.Fprintf(w, "Username: %s\n", username)
	fmt.Fprintf(w, "Password: %s\n", password)

}

func main() {
	fileServer := http.FileServer(http.Dir("./static"))

	// routes
	http.Handle("/", fileServer)
	http.HandleFunc("/hello", helloFunc)
	http.HandleFunc("/sign-up", jsonFunc)

	fmt.Println("Server is listening...")

	err := http.ListenAndServe(":8080", nil)

	if err != nil {
		panic(err)
	}

}
