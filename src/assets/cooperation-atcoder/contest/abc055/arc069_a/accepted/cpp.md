# AtCoder Beginner Contest 055
## C - Scc Puzzle
```cpp
#include <iostream>

using namespace std;

int main() {
    long long n, m;
    cin >> n >> m;

    if (m - 2 * n >= 0) {
        cout << n + (m - 2 * n) / 4 << endl;
    } else {
        cout << m / 2 << endl;
    }
}
```
