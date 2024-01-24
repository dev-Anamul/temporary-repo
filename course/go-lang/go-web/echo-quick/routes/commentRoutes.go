package routes

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func SetUpCommentRoutes(e *echo.Echo) {
	e.GET("/comments", getComments)
	e.GET("/comments/:id", getComment)
	e.POST("/comments", createComment)
	e.PUT("/comments/:id", updateComment)
	e.DELETE("/comments/:id", deleteComment)
}

func getComments(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func getComment(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func createComment(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func updateComment(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func deleteComment(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}
