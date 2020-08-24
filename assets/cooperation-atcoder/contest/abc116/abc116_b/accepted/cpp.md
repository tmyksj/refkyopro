# AtCoder Beginner Contest 116
## B - Collatz Problem
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int s;
    cin >> s;

    vector<bool> exists(1000000 + 1, false);
    for (int i = 0, a = s; ; i++, a = (a % 2 == 0 ? a / 2 : 3 * a + 1)) {
        if (exists[a]) {
            cout << i + 1 << endl;
            break;
        }

        exists[a] = true;
    }
}
```
