#!/usr/bin/python3

def _main() -> None:
    t = int(input("Enter the number of test cases: "))  # Number of test cases
    for _ in range(t):
        n = int(input("Enter the number of cards: "))  # Number of cards
        cards = input("Enter the arrangement of cards: ")  # Card configuration
        flip_b, flip_w = 0, 0

        # Calculate flips for both patterns
        for i in range(n):
            if i % 2 == 0:  # Even index
                if cards[i] != 'B':  # For "BWBW" pattern
                    flip_b += 1
                if cards[i] != 'W':  # For "WBWB" pattern
                    flip_w += 1
            else:  # Odd index
                if cards[i] != 'W':  # For "BWBW" pattern
                    flip_b += 1
                if cards[i] != 'B':  # For "WBWB" pattern
                    flip_w += 1

        # Calculate the minimum flips required for this test case
        ans = min(flip_b, flip_w)
        print(f"Case result: {ans}")  # Print the result for the current test case

if __name__ == '__main__':
    _main()