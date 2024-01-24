package main

import (
	"fmt"
)

type Student struct {
	id         int
	name       string
	age        int
	subject    string
	department string
	semester   int
}

func main() {

	lan := make(map[string]string)
	lan["name"] = "golang"
	lan["type"] = "static"
	lan["version"] = "1.0.0"

	fmt.Println(lan)

	student := Student{1, "John", 20, "Computer Science", "Engineering", 3}
	fmt.Printf("Student Details: %+v\n", student)
	fmt.Println("Student Name: ", student.name)
}
