# AtCoder Beginner Contest 143
## D - Triangles
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> l(n);
    for (int i = 0; i < n; i++) {
        cin >> l[i];
    }

    sort(l.begin(), l.end());

    int res = 0;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            vector<int>::iterator low = lower_bound(l.begin() + j + 1, l.end(), max(l[i] - l[j], l[j] - l[i])),
                    high = lower_bound(l.begin() + j + 1, l.end(), l[i] + l[j]);
            if (low != l.end()) {
                res += high - low;
            }
        }
    }

    cout << res << endl;
}
```
