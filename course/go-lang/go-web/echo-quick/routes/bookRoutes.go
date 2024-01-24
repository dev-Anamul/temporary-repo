package routes

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func SetUpBookRoutes(e *echo.Echo) {
	e.GET("/books", getBooks)
	e.GET("/books/:id", getBook)
	e.POST("/books", createBook)
	e.PUT("/books/:id", updateBook)
	e.DELETE("/books/:id", deleteBook)
}

func getBooks(c echo.Context) error {
	return c.String(http.StatusOK, "get all the books")
}

func getBook(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func createBook(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func updateBook(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func deleteBook(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}
