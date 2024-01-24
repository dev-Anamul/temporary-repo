import math

numOfMiles = int(input("Enter the number of miles: "))

numOfKilometers = numOfMiles * 1.60934

print("{0} miles is equal to {1} kilometers".format(
    numOfMiles, numOfKilometers))

print(math.perm(5, 3))

age = int(input("Enter your age: "))

can_vote = True if age >= 18 else False

if (can_vote):
    print("You can vote")
else:
    print("You can't vote")
