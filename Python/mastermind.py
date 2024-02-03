#Mastermind
import random 
import time
#difining variables 
OPERATORS = ["+","-","*"] #list of operators
MIN_OPERAND = 1    #this decides the level of difficulty i.e how many numbers can get included
MAX_OPERAND = 15

# Defining a function for creating random operators
def problem():
    left = random.randint(MIN_OPERAND,MAX_OPERAND)  #here we give a range of operands 
    right = random.randint(MIN_OPERAND,MAX_OPERAND)
    operator = random.choice(OPERATORS) #random operators choosen from given list;

    expr = str(left) + " " + operator + " " + str(right)  # creating operation
    ans = eval(expr)  #predefined function to answer of expression
    return expr,ans     #returning expression and answer

def practice(N):

  #  TOTAL_PROB = N

    input("Press enter to start...")
    print("")
    starttime = time.time()

    for i in range(N):
        expr, ans = problem()
        while True :
            guess = input ("problem #"+str(i+1)+" "+":"+" "+expr+" "+"= :")
            if guess == str(ans):
                break

    endtime = time.time()
    totaltime = endtime - starttime
    return totaltime
    
print("\twelcome to our game!!")
print("\tchoose an option :")
print("\t1 practice")
print("\t2 play game")
ch = int(input())

while ch != 3:

    if ch == 1:
        TOTAL_PROB = int(input("enter total no. of problems :"))
        time = practice(TOTAL_PROB)
        print("your total time is :",time)
        break
    elif ch == 2:
        TOTAL_PROB = int(input("enter total no. of problems :"))
        name1 = input("enter the name of player 1 :")
        print(name1,"'s chance ")
        player1time = practice(TOTAL_PROB)
        print(name1,"'s score is :",player1time,"seconds.")

        name2 = input("enter the name of player 2 :")
        print(name2,"'s chance ")
        player2time = practice(TOTAL_PROB)
        print(name2,"'s score is :",player2time,"seconds.")
        
        if player1time > player2time:
            print(name2,"won....")
        else :
            print(name1,"won...")
        break
    else :
        break