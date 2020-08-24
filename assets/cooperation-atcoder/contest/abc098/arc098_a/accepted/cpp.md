# AtCoder Beginner Contest 098
## C - Attention
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    vector<int> e2w(n + 2, 0), w2e(n + 2, 0);
    for (int i = 1; i <= n; i++) {
        if (s[i - 1] == 'E') {
            e2w[i]++;
        } else {
            w2e[i]++;
        }
    }

    for (int i = 1; i <= n; i++) {
        e2w[n - i + 1] += e2w[n - i + 2];
        w2e[i] += w2e[i - 1];
    }

    int res = 1000000000;
    for (int i = 1; i <= n; i++) {
        if (res > e2w[i + 1] + w2e[i - 1]) {
            res = e2w[i + 1] + w2e[i - 1];
        }
    }

    cout << res << endl;
}
```
