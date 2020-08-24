# AtCoder Beginner Contest 153
## B - Common Raccoon vs Monster
```cpp
#include <iostream>

using namespace std;

int main() {
    int h, n;
    cin >> h >> n;

    int a_sum = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        a_sum += a;
    }

    cout << (h <= a_sum ? "Yes" : "No") << endl;
}
```
