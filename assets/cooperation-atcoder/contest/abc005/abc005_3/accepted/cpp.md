# AtCoder Beginner Contest 005
## C - おいしいたこ焼きの売り方
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int t, n;
    cin >> t >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    int m;
    cin >> m;

    vector<int> b(m);
    for (int i = 0; i < m; i++) {
        cin >> b[i];
    }

    bool res = true;
    for (int i = 0, j = 0; j < m; i++, j++) {
        while (i < n && a[i] < b[j] - t) {
            i++;
        }
        if (i == n || a[i] > b[j]) {
            res = false;
        }
    }

    cout << (res ? "yes" : "no") << endl;
}
```
