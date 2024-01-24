#! /bin/bash

read -p "Enter a word : " word

if [ $word == "a" ]
then
    echo the word is $word
elif [ $word == "b" ]
then
    echo the word is $word
else
    echo the word is $word
fi

read -p "Enter a number : " num

if ((num == 10)); then
    echo "Your number equals 10"
elif ((num > 10)); then
    echo "It is greater than 10"
else
    echo "It is less than 10"
fi