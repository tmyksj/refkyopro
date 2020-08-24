# AtCoder Beginner Contest 166
## E - This Message Will Self-Destruct in 5s
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<long long> m(n, 0);
    for (int i = 0; i < n; i++) {
        if (i + a[i] < n) {
            m[i + a[i]]++;
        }
    }

    long long res = 0;
    for (int i = 0; i < n; i++) {
        if (i - a[i] >= 0) {
            res += m[i - a[i]];
        }
    }

    cout << res << endl;
}
```
