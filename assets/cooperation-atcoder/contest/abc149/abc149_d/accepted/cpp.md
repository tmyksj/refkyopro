# AtCoder Beginner Contest 149
## D - Prediction and Restriction
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n, k, r, s, p;
    string t;
    cin >> n >> k >> r >> s >> p >> t;

    vector<bool> next(n, false);

    long long res = 0;
    for (int i = 0; i < k && i < n; i++) {
        if (t[i] == 'r') {
            res += p;
        } else if (t[i] == 's') {
            res += r;
        } else {
            res += s;
        }
    }

    for (int i = k; i < n; i++) {
        if (t[i] == t[i - k] && !next[i - k]) {
            next[i] = true;
        } else {
            if (t[i] == 'r') {
                res += p;
            } else if (t[i] == 's') {
                res += r;
            } else {
                res += s;
            }
        }
    }

    cout << res << endl;
}
```
