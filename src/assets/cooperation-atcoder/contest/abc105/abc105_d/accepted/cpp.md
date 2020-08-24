# AtCoder Beginner Contest 105
## D - Candy Distribution
```cpp
#include <iostream>
#include <map>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<long long> a(n + 1, 0);
    map<int, int> cnt;
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        a[i] += a[i - 1];
        cnt[a[i] % m]++;
    }

    long long res = 0;
    for (int i = 1; i <= n; i++) {
        res += cnt[a[i - 1] % m];
        cnt[a[i] % m]--;
    }

    cout << res << endl;
}
```
