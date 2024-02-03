import random
import time

OPERATORS = ["+","-","*"];
min_operand= 1
max_operand = 15

def problem():
    left_op= random.randint(min_operand,max_operand)
    right_op=random.randint(min_operand,max_operand);

    operators = random.randint(OPERATORS)

    expr= str(left_op)+ " "+ OPERATORS + " "+str(right_op)

    ans=eval(expr)
    return expr,ans

def practice(N):
    
    print("PRESS ENTER TO START")
    print("")
    start_time=time.time()

    for i in range(N):
        ans,expr= problem()
        while True:
              guess = input ("problem #"+str(i+1)+" "+":"+" "+expr+" "+"= :")
              if guess == str(ans):
                break

    end_time=time.time()
    total_time= end_time-start_time  

    return total_time


print("Welcome to mastermind")
print("\tchoose an option :")
print("\t1 practice")
print("\t2 play game")

ch= int(input())

while ch!=3:
    if ch==1:
        TOTAL_PROB = int(input("enter total no. of problems :"))
        time= practice(TOTAL_PROB)
        print("your time is ",time)
        break
    elif ch==2:
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
    else:
        break



      