# AtCoder Beginner Contest 140
## C - Maximal Value
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> b(n + 1, 1000000000);
    for (int i = 1; i <= n - 1; i++) {
        cin >> b[i];
    }

    int res = 0;
    for (int i = 1; i <= n; i++) {
        res += min(b[i - 1], b[i]);
    }

    cout << res << endl;
}
```
