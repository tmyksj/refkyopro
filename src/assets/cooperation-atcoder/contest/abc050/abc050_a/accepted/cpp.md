# AtCoder Beginner Contest 050
## A - Addition and Subtraction Easy
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
    int a, b;
    string op;
    cin >> a >> op >> b;
    cout << (op == "+" ? a + b : a - b) << endl;
}
```
