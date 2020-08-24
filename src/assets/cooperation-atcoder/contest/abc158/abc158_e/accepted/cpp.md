# AtCoder Beginner Contest 158
## E - Divisible Substring
```cpp
#include <iostream>
#include <map>
#include <string>

using namespace std;

int main() {
    int n, p;
    string s;
    cin >> n >> p >> s;

    long long res = 0;
    if (p == 2 || p == 5) {
        for (int i = 0; i < n; i++) {
            if ((s[i] - '0') % p == 0) {
                res += i + 1;
            }
        }
    } else {
        map<int, int> m;
        m[0] = 1;
        for (int i = n - 1, j = 1, k = 0; i >= 0; i--, j *= 10, j %= p) {
            k = ((s[i] - '0') * j + k) % p;
            res += m[k];
            m[k]++;
        }
    }

    cout << res << endl;
}
```
