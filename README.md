# String Calculator

## Overview

This project implements a simple String Calculator using Test-Driven Development (TDD) principles. The goal is to create a calculator that can handle strings of numbers with various delimiters and formatting rules. The implementation follows best practices for TDD, and each feature is introduced incrementally through a series of tests.

## Features

- **Empty String**: Returns `0` for an empty string.
- **Single Number**: Returns the number itself for a single number.
- **Addition of Multiple Numbers**: Adds two or more numbers separated by commas.
- **New Lines as Delimiters**: Handles new lines between numbers.
- **Custom Delimiters**: Supports custom delimiters specified at the beginning of the string.
- **Negative Numbers**: Throws an exception for negative numbers, listing all negative numbers in the exception message.
- **Ignore Numbers Greater Than 1000**: Ignores numbers greater than 1000.
- **Delimiters of Any Length**: Handles delimiters of arbitrary length.
- **Multiple Delimiters**: Supports multiple delimiters.

## Examples

1. **Empty String**
   - **Input**: `""`
   - **Output**: `0`

2. **Single Number**
   - **Input**: `"1"`
   - **Output**: `1`

3. **Addition of Two Numbers**
   - **Input**: `"2,3"`
   - **Output**: `5`

4. **Multiple Numbers**
   - **Input**: `"2,4,6,8"`
   - **Output**: `20`

5. **New Lines as Delimiters**
   - **Input**: `"1\n2,3"`
   - **Output**: `6`

6. **Custom Delimiters**
   - **Input**: `"//;\n1;2"`
   - **Output**: `3`

7. **Negative Numbers**
   - **Input**: `"1,2,-3,-4"`
   - **Output**: Throws an error: `negative numbers not allowed -3, -4`

8. **Numbers Greater Than 1000**
   - **Input**: `"2,1001"`
   - **Output**: `2`

9. **Delimiters of Any Length**
   - **Input**: `"//[***]\n1***2***3"`
   - **Output**: `6`

10. **Multiple Delimiters**
    - **Input**: `"//[*][%]\n1*2%3"`
    - **Output**: `6`

11. **Delimiters with Length Longer Than One Character**
    - **Input**: `"//[**][%%%]\n1**2%3"`
    - **Output**: `6`

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/asif-sidd9768/tdd-assessment
   cd tdd-assessment
