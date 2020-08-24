# AtCoder Grand Contest 039
## A - Connection and Disconnection
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    string s;
    long long k;
    cin >> s >> k;

    int n = static_cast<int>(s.size());

    long long res = 0;
    if (k == 1) {
        for (int i = 1, c = 1; i < n; i++) {
            if (s[i - 1] == s[i]) {
                c++;
            }

            if (s[i - 1] != s[i] || i == n - 1) {
                res += c / 2;
                c = 1;
            }
        }
    } else {
        int idx = 1;
        for (; idx < n && s[idx - 1] == s[idx]; idx++) {
        }

        if (idx == n) {
            res += k * idx / 2;
        } else {
            res += idx / 2;

            long long r = 0;
            for (int i = 1, c = 1; i < n; i++) {
                if (s[(idx + i - 1) % n] == s[(idx + i) % n]) {
                    c++;
                }

                if (s[(idx + i - 1) % n] != s[(idx + i) % n] || i == n - 1) {
                    r += c / 2;
                    c = 1;
                }
            }

            res += (k - 1) * r;

            for (int i = idx + 1, c = 1; i < n; i++) {
                if (s[i - 1] == s[i]) {
                    c++;
                }

                if (s[i - 1] != s[i] || i == n - 1) {
                    res += c / 2;
                    c = 1;
                }
            }
        }
    }

    cout << res << endl;
}
```
