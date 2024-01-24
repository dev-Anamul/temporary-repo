import random


def generate_random_number():
    return random.randint(1, 100)


names = ['John', 'Mary', 'Bob', 'Mosh', 'Sarah', 'Mike', 'Mary']

names.append('Jen')

print(generate_random_number())
