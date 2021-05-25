from django import template

register = template.Library()

@register.filter
def addstr(one, two):
    return str(one) + str(two)