package main

import "fmt"

func main() {

	var name string = "Anamul Haque"
	name2 := "Anamul Haque"
	num := 10

	const pi = 3.1416

	fmt.Printf("Hello, world.\n")
	fmt.Printf("My name is %s\n", name)
	fmt.Printf("My name is %s\n", name2)
	fmt.Printf("My name is %s and my age is %d and type of num is %T\n", name2, num, num)
	fmt.Printf("Value of pi is %.4f\n", pi)

}
