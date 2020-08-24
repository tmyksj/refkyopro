# AtCoder Beginner Contest 059
## C - Sequence
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    long long res1 = 0;
    for (long long i = 0, c = 0; i < n; i++) {
        c += a[i];
        if (i % 2 == 0 && c <= 0) {
            res1 += 1 - c;
            c = 1;
        } else if (i % 2 != 0 && c >= 0) {
            res1 += 1 + c;
            c = -1;
        }
    }

    long long res2 = 0;
    for (long long i = 0, c = 0; i < n; i++) {
        c += a[i];
        if (i % 2 == 0 && c >= 0) {
            res2 += 1 + c;
            c = -1;
        } else if (i % 2 != 0 && c <= 0) {
            res2 += 1 - c;
            c = 1;
        }
    }

    cout << min(res1, res2) << endl;
}
```
