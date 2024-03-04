![1](https://github.com/homayunmmdy/Python/assets/129702378/26083279-e48e-4928-b547-38060e545732)

# Binary Search 
In computer science, binary search, also known as half-interval search,[1] logarithmic search,[2] or binary chop,[3] is a search algorithm that finds the position of a target value within a sorted array.[4][5] Binary search compares the target value to the middle element of the array. If they are not equal, the half in which the target cannot lie is eliminated and the search continues on the remaining half, again taking the middle element to compare to the target value, and repeating this until the target value is found. If the search ends with the remaining half being empty, the target is not in the array.

## Overview

This Python script demonstrates the implementation of binary search, a highly efficient algorithm for finding a target element in a sorted array.

## Code Explanation

The `binary_search` function takes a sorted array (`arr`) and a target value (`target`) as input parameters. It employs a binary search algorithm to find the index of the target element in the array or returns -1 if the target is not present.

The algorithm initializes two pointers, `start` and `end`, representing the range of the search. It repeatedly narrows down this range by adjusting the pointers based on whether the middle element is equal to, greater than, or less than the target. This process continues until the target is found or the search range is empty.

## Usage Example

```python
arr = [20, 30, 40, 60, 80, 90]
ans = binary_search(arr, 80)

if ans == -1:
    print("Target Not Found")
else:
    print("Target found at index", ans)
```

In this example, the script searches for the target value `80` in the array `arr`. If found, it prints the index; otherwise, it indicates that the target is not present.

## Big O Notation

The time complexity of binary search is O(log n), where n is the number of elements in the array. This logarithmic complexity signifies the algorithm's efficiency in handling large datasets, making it significantly faster than linear search algorithms, especially as the size of the dataset increases.

The O(log n) notation implies that the algorithm's time complexity grows logarithmically with the size of the dataset, making binary search a favorable choice for large sorted datasets.
