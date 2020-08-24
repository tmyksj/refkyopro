# AtCoder Beginner Contest 099
## B - Stone Monument
```cpp
#include <iostream>

using namespace std;

int main() {
    int a, b;
    cin >> a >> b;
    cout << (a * a - 2 * a * b + b * b - a - b) / 2 << endl;
}
```
