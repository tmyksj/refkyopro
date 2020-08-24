# AtCoder Beginner Contest 102
## C - Linear Approximation
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
        a[i] -= i + 1;
    }

    sort(a.begin(), a.end());

    long long res = 0;
    for (int i = 0; i < n; i++) {
        res += a[i] - a[0];
    }

    for (long long i = 1, cur = res; i < n; i++) {
        cur = cur + i * (a[i] - a[i - 1]) - (n - i) * (a[i] - a[i - 1]);

        if (res > cur) {
            res = cur;
        }
    }

    cout << res << endl;
}
```
