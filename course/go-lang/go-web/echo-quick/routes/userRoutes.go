package routes

import (
	"net/http"

	"github.com/labstack/echo/v4"
)

func SetUpUserRoutes(e *echo.Echo) {
	e.GET("/users", getUsers)
	e.GET("/users/:id", getUser)
	e.POST("/users", createUser)
	e.PUT("/users/:id", updateUser)
	e.DELETE("/users/:id", deleteUser)
}

func getUsers(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func getUser(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func createUser(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func updateUser(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func deleteUser(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}
