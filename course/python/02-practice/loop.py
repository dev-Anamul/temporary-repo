i = 1

while i <= 10:
    print("Anamul")
    i = i+1


for i in range(10, 21, 1):
    if i % 5 == 0:
        continue
    print(i)


def add(a: int, b: int):
    return a + b


print(add(2, 5))


for i in range(1, 5):
    for i in range(1, 5):
        print("# ", end="")
    print()

for i in range(1, 5):
    for i in range(1, 5-i):
        print("# ", end="")
    print()

nums = [1, 6, 5, 3, 2, 5, 7, 3, 5, 7, 8, 6, 54]

for num in nums:
    if num % 10 == 0:
        print(num)
        break
else:
    print("No number found.")
