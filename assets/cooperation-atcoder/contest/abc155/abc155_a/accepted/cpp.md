# AtCoder Beginner Contest 155
## A - Poor
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << ((a == b && b != c) || (b == c && c != a) || (c == a && a != b) ? "Yes" : "No") << endl;
}
```
