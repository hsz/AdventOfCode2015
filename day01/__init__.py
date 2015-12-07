input = open('input.txt').readlines()[0]


def one():
    return input.count('(') - input.count(')')


def two(f=0):
    for k, v in enumerate(input):
        f += (-1, 1)[v == '(']
        if f == -1: return k + 1
