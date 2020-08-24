# AtCoder Beginner Contest 140
## B - Buffet
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

    vector<int> b(n);
    for (int i = 0; i < n; i++) {
        cin >> b[i];
    }

    vector<int> c(n - 1);
    for (int i = 0; i < n - 1; i++) {
        cin >> c[i];
    }

    int res = 0;
    for (int i = 0; i < n; i++) {
        res += b[a[i] - 1];
        if (i + 1 < n && a[i] + 1 == a[i + 1]) {
            res += c[a[i] - 1];
        }
    }

    cout << res << endl;
}
```
