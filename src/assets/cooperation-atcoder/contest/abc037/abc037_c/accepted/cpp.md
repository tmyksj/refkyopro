# AtCoder Beginner Contest 037
## C - 総和
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<long long> a(n + 1, 0);
    for (int i = 0; i < n; i++) {
        cin >> a[i + 1];
        a[i + 1] += a[i];
    }

    long long res = 0;
    for (int i = k; i <= n; i++) {
        res += a[i] - a[i - k];
    }

    cout << res << endl;
}
```
