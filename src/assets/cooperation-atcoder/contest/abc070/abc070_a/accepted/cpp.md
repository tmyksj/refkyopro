# AtCoder Beginner Contest 070
## A - Palindromic Number
```cpp
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    cout << (n / 100 == n % 10 ? "Yes" : "No") << endl;
}
```
