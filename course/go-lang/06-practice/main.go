package main

import "fmt"

func main() {
	fmt.Println("Hello World")
	result := add(1, 2)
	result2 := addAll(1, 2, 3, 4, 5)

	fmt.Println("Result", result)
	fmt.Println("All result", result2)
}

func add(a int, b int) int {
	return a + b
}

// receive variable number of arguments
func addAll(numbers ...int) int {
	sum := 0
	fmt.Println("Numbers", numbers)

	for _, number := range numbers {
		sum += number

	}

	return sum
}
