# AtCoder Beginner Contest 146
## E - Rem of Sum is Num
```cpp
#include <iostream>
#include <map>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<long long> a(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        a[i] += a[i - 1];
    }

    long long res = 0;

    map<long long, int> m;
    m[0]++;
    for (int i = 1, j = 1 - k; i <= n; i++, j++) {
        if (j >= 0) {
            m[(a[j] - j) % k]--;
        }
        res += m[(a[i] - i) % k];
        m[(a[i] - i) % k]++;
    }

    cout << res << endl;
}
```
