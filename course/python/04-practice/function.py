from calc import *
def f(a): return a*a


result = f(5)
print(result)
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 76, 87]
evens = list(filter(lambda n: n % 2 == 0, nums))
doubles = list(map(lambda n: n * 2, nums))
print(add(2, 3))
print(sub(3, 2))

print(evens, doubles)
