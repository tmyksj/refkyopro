# AtCoder Beginner Contest 061
## A - Between Two Integers
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << (a <= c && c <= b ? "Yes" : "No") << endl;
}
```
