package main

import (
	"echo-quick/models"
	"echo-quick/routes"
	"fmt"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func getUser(c echo.Context) error {
	return c.String(http.StatusOK, "Hello, World!")
}

func main() {
	err := godotenv.Load()

	if err != nil {
		fmt.Println("Error loading .env file")
	}

	// connect to the database
	dsn := "root:admin@tcp(127.0.0.1:3306)/medicineInfo?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		fmt.Println("Error connecting to database")
	}

	var medicine []models.Medicine

	result := db.Find(&medicine).Where("sl = ?", 1)

	fmt.Println(result)

	app := echo.New()

	app.GET("/", getUser)

	// set up routes
	routes.SetUpRoutes(app)

	port := os.Getenv("PORT") // for heroku
	if port == "" {
		port = "8080"
	}

	fmt.Println("Server is running at port " + port + "...")
	app.Logger.Fatal(app.Start(":" + port))

}
