# AtCoder Beginner Contest 156
## C - Rally
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> x(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i];
    }

    int res = 1000000000;
    for (int i = 1; i <= 100; i++) {
        int r = 0;
        for (int j = 0; j < n; j++) {
            r += (x[j] - i) * (x[j] - i);
        }

        res = min(res, r);
    }

    cout << res << endl;
}
```
