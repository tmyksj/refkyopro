# AtCoder Beginner Contest 098
## D - Xor Sum 2
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

    long long res = 0;
    for (int l = 0, r = 0, s = a[0]; l < n; l++) {
        while (r + 1 < n && (s & a[r + 1]) == 0) {
            s += a[r + 1];
            r++;
        }
        s -= a[l];
        res += r - l + 1;
    }

    cout << res << endl;
}
```
