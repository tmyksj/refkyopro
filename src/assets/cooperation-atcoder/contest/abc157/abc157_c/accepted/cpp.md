# AtCoder Beginner Contest 157
## C - Guess The Number
```cpp
#include <iostream>
#include <vector>

using namespace std;

int pow10(int n) {
    int r = 1;
    for (int i = 0; i < n; i++) {
        r *= 10;
    }
    return r;
}

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> s(m), c(m);
    for (int i = 0; i < m; i++) {
        cin >> s[i] >> c[i];
    }

    int res = -1;
    for (int i = (n == 1 ? 0 : pow10(n - 1)); i < pow10(n); i++) {
        bool r = true;
        for (int j = 0; j < m; j++) {
            if ((i / pow10(n - s[j])) % 10 != c[j]) {
                r = false;
                break;
            }
        }

        if (r) {
            res = i;
            break;
        }
    }

    cout << res << endl;
}
```
