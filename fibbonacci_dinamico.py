def fibbonnacci(n, memo={}):
    if n==0 or n==1:
        return 1
    try:
        return memo[n]
    except KeyError:
        resultado= fibbonnacci(n-1, memo) + fibbonnacci(n-2, memo)
        memo[n]=resultado
        return resultado

if __name__=='__main__':
    n= int(input("Digite un numero: "))
    resultado= fibbonnacci(n)
    print(resultado)
 

    

