#! /bin/bash
read -p "Name One : " name1
read -p "Name Two : " name2
read -p "Name Three : " name3
read -sp "Password : " pass
echo
echo "Names : $name1, $name2, $name3"
echo "Password : $pass"

read -a numbers
echo "Numbers : ${numbers[0]}, ${numbers[1]}, ${numbers[2]}"
