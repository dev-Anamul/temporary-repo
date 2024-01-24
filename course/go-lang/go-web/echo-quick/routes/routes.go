package routes

import "github.com/labstack/echo/v4"

func SetUpRoutes(e *echo.Echo) {
	SetUpUserRoutes(e)
	SetUpBookRoutes(e)
	SetUpCommentRoutes(e)
}
