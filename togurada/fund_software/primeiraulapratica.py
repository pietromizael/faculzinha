"""
Programa que calcula média aritmética
Obter as 2 notas da prova
Calcular a média aritmética
Se a média for igual ou maior que 7, o aluno foi aprovado
senão, ele foi reprovado
"""

nota_1 = int(input("Digite a primeira nota: "))
nota_2 = int(input("Digite a segunda nota: "))

media = (nota_1 + nota_2) / 2

aprovado = None

if media >= 7:
    aprovado = "Você foi aprovado"
else:
    aprovado = "Você foi reprovado"

print(aprovado)