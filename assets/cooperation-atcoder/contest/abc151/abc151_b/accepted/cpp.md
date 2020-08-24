# AtCoder Beginner Contest 151
## B - Achieve the Goal
```cpp
#include <algorithm>
#include <iostream>

using namespace std;

int main() {
    int n, k, m;
    cin >> n >> k >> m;

    int a_sum = 0;
    for (int i = 0; i < n - 1; i++) {
        int a;
        cin >> a;
        a_sum += a;
    }

    cout << (m * n - a_sum <= k ? max(0, m * n - a_sum) : -1) << endl;
}
```
