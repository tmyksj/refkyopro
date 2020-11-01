# AtCoder Regular Contest 029
## A - 高橋君とお肉
```cpp
#include <algorithm>
#include <iostream>
#include <numeric>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> t(n);
    for (int i = 0; i < n; i++) {
        cin >> t[i];
    }

    int res = accumulate(t.begin(), t.end(), 0);
    for (int i = 0; i < (1 << n); i++) {
        int a = 0, b = 0;
        for (int j = 0; j < n; j++) {
            if ((i & (1 << j)) == 0) {
                a += t[j];
            } else {
                b += t[j];
            }
        }

        res = min(res, max(a, b));
    }

    cout << res << endl;
}
```
