# 第一回日本最強プログラマー学生選手権-予選-
## C - Cell Inversion
```cpp
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {
    int n;
    string s;
    cin >> n >> s;

    vector<int> l(2 * n, 0), r(2 * n, 0);
    l[0] = 1;
    for (int i = 1; i < 2 * n; i++) {
        if ((s[i] == s[i - 1] && l[i - 1] == 0) || (s[i] != s[i - 1] && l[i - 1] == 1)) {
            l[i] = 1;
        } else {
            r[i] = 1;
        }
    }

    for (int i = 1; i < 2 * n; i++) {
        l[i] += l[i - 1];
        r[i] += r[i - 1];
    }

    if (s[0] == 'B' && s[2 * n - 1] == 'B' && l[2 * n - 1] == r[2 * n - 1]) {
        long long res = 1;
        for (int i = 0; i < n; i++) {
            res *= i + 1;
            res %= 1000000007;
        }
        for (int i = 1; i < 2 * n; i++) {
            if (r[i] > r[i - 1]) {
                res *= l[i - 1] - r[i - 1];
                res %= 1000000007;
            }
        }

        cout << res << endl;
    } else {
        cout << "0" << endl;
    }
}
```
