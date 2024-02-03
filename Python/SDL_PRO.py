import time
import random

def generate_random_paragraph():
   
    subjects = ['The cat', 'A dog', 'My friend', 'A mysterious stranger']
    verbs = ['runs', 'jumps', 'sings', 'sleeps', 'eats']
    adjectives = ['quick', 'lazy', 'happy', 'sad', 'colorful']
    objects = ['on the mat', 'under the table', 'in the garden', 'with joy']

    
    paragraph = f"{random.choice(subjects)} {random.choice(verbs)} {random.choice(adjectives)} {random.choice(objects)}."

    return paragraph

def calculate_typing_speed(start_time, end_time, typed_words):
    elapsed_time = end_time - start_time
    words_per_minute = (len(typed_words.split()) / elapsed_time) * 60
    return words_per_minute

def typing_test(player):
    
    target_words = generate_random_paragraph()

    
    print(f"\nPlayer {player}, type the following words:")
    print(target_words)

    # Record the start time
    start_time = time.time()

    # Prompt the player to type the words
    typed_words = input(f"Player {player}'s typing: ")

    # Record the end time
    end_time = time.time()

    # Calculate typing speed
    speed = calculate_typing_speed(start_time, end_time, typed_words)
    
    # Display the typing speed
    print(f"\nPlayer {player}'s Typing speed: {speed:.2f} words per minute")

    return speed

def main():
   
    speeds = []

    for player in range(1, 3):
        speed = typing_test(player)
        speeds.append(speed)

    if speeds[0] > speeds[1]:
        print("\nPlayer 1 wins!")
    elif speeds[0] < speeds[1]:
        print("\nPlayer 2 wins!")
    else:
        print("\nIt's a tie!")
    print("KEEP WORKING ON YOUR TYPING SKILLS")    

if __name__ == "__main__":
    main()
