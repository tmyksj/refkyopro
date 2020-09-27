# AtCoder Beginner Contest 179
## E - Sequence Sum
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, x, m;
    cin >> n >> x >> m;

    long long res = 0;
    vector<int> p(m, -1);
    for (long long i = 0, j = x; i < n; i++, j = j * j % m) {
        if (p[j] == -1) {
            p[j] = i;
            res += j;
        } else {
            for (long long k = 0, l = j; k < i - p[j]; k++, l = l * l % m) {
                res += ((n - i) / (i - p[j])) * l;
                if (k < (n - i) % (i - p[j])) {
                    res += l;
                }
            }

            break;
        }
    }

    cout << res << endl;
}
```
