# AtCoder Beginner Contest 086
## A - Product
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << ((a * b) % 2 == 0 ? "Even" : "Odd") << endl;
}
```
