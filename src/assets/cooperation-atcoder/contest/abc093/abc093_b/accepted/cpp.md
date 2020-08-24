# AtCoder Beginner Contest 093
## B - Small and Large Integers
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int a, b, k;
    cin >> a >> b >> k;

    for (int i = a; i <= min(a + k - 1, b); i++) {
        cout << i << endl;
    }

    for (int i = max(a + k, b - k + 1); i <= b; i++) {
        cout << i << endl;
    }
}
```
