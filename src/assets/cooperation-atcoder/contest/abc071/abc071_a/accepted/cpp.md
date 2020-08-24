# AtCoder Beginner Contest 071
## A - Meal Delivery
```cpp
#include <iostream>

using namespace std;

int main() {
    int x, a, b;
    cin >> x >> a >> b;
    cout << (abs(x - a) < abs(x - b) ? "A" : "B") << endl;
}
```
