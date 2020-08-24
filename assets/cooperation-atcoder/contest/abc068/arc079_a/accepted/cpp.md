# AtCoder Beginner Contest 068
## C - Cat Snuke and a Voyage
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> a(m), b(m);
    for (int i = 0; i < m; i++) {
        cin >> a[i] >> b[i];
    }

    vector<bool> possible(n + 1, false);
    for (int i = 0; i < m; i++) {
        if (b[i] == n) {
            possible[a[i]] = true;
        }
    }

    bool res = false;
    for (int i = 0; i < m; i++) {
        if (a[i] == 1 && possible[b[i]]) {
            res = true;
        }
    }

    cout << (res ? "POSSIBLE" : "IMPOSSIBLE") << endl;
}
```
