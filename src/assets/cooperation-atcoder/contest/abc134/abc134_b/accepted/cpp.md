# AtCoder Beginner Contest 134
## B - Golden Apple
```cpp
#include <iostream>

using namespace std;

int main() {
    int n, d;
    cin >> n >> d;
    cout << n / (2 * d + 1) + (n % (2 * d + 1) == 0 ? 0 : 1) << endl;
}
```
