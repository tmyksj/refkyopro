# AtCoder Beginner Contest 067
## C - Splitting Pile
```cpp
#include <algorithm>
#include <cstdlib>
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

    long long x = a[0], y = 0;
    for (int i = 1; i < n; i++) {
        y += a[i];
    }

    long long res = abs(x - y);
    for (int i = 1; i < n - 1; i++) {
        x += a[i];
        y -= a[i];
        res = min(res, abs(x - y));
    }

    cout << res << endl;
}
```
