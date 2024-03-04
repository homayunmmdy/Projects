![stack](https://github.com/homayunmmdy/Python/assets/129702378/628fa91f-ecfb-4f3e-94c8-bcbddbfd1573)

# Stack Implementation in Python


This Python program demonstrates a basic stack implementation using a list. The stack follows the Last-In-First-Out (LIFO) order, where elements are added and removed from the top.

## Usage

1. Initialize the stack using an empty list:
    ```python
    stack = []
    ```

2. Use the `append()` function to push elements onto the stack:
    ```python
    stack.append('a')
    stack.append('b')
    stack.append('c')
    ```

3. Print the initial stack:
    ```python
    print('Initial stack:')
    print(stack)
    ```

4. Use the `pop()` function to remove elements from the stack in LIFO order:
    ```python
    print('\nElements popped from stack:')
    print(stack.pop())
    print(stack.pop())
    print(stack.pop())
    ```

5. Print the stack after elements are popped:
    ```python
    print('\nStack after elements are popped:')
    print(stack)
    ```

6. Note that attempting to pop from an empty stack will result in an IndexError.

## Example Output

```
Initial stack:
['a', 'b', 'c']

Elements popped from stack:
c
b
a

Stack after elements are popped:
[]
```

Feel free to use and modify this stack implementation for your Python projects.
