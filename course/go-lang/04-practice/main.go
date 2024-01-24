package main

import "fmt"

func main() {
	var fruits [3]string

	fruits[0] = "Apple"
	fruits[1] = "Banana"
	fruits[2] = "Orange"

	fmt.Println(fruits)

	// Declare and initialize array
	var numbers = []int{1, 2, 3}
	fmt.Println(numbers)

	numbers = append(numbers, 4)
	fmt.Println(numbers)

}
