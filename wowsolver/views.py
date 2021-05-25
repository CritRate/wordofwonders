from django.shortcuts import render

from itertools import permutations

# Create your views here.

# defualt values are empty strings with some value
def home(request):
    return render(request, 'wowsolver/home.html')


def solve(request):
    letters = request.GET.get('letters', '')
    word = request.GET.get('word', '')
    context = {
        "letters" : letters,
        "word" : word,
        "guesses": generate_guesses(letters, word)
    }
    return render(request, 'wowsolver/home.html', context=context)


def generate_guesses(letters, word):
    guesses = []
    for guess in permutations(letters, len(word)):
            for i, letter in enumerate(word):
                if letter not in '.':
                    if guess[i] != letter:
                        break
            else:
                guesses.append(''.join(guess))
    return guesses