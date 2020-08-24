# AtCoder Beginner Contest 174
## E - Logs
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int l = 1, r = *max_element(a.begin(), a.end());
    while (l < r) {
        int m = (l + r) / 2;

        int c = 0;
        for (int j = 0; j < n; j++) {
            c += (a[j] - 1) / m;
        }

        if (c > k) {
            l = m + 1;
        } else {
            r = m;
        }
    }

    cout << l << endl;
}
```
