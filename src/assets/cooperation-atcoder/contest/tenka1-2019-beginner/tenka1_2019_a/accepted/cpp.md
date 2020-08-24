# Tenka1 Programmer Beginner Contest 2019
## A - On the Way
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b, c;
    cin >> a >> b >> c;
    cout << ((a <= c && c <= b) || (a >= c && c >= b) ? "Yes" : "No") << endl;
}
```
