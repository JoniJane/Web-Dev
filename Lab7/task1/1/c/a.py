a = int(input())
b = int(input())

even_numbers = [str(number) for number in range(a, b + 1) if number % 2 == 0]
print(" ".join(even_numbers))
