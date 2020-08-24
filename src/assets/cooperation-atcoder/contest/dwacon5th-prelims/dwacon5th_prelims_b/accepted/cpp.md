# 第5回 ドワンゴからの挑戦状 予選
## B - Sum AND Subarrays
```cpp
#include <iostream>
#include <vector>

using namespace std;

long long dfs(int k, vector<long long>& b, int i) {
    if (i < 0) {
        return 0;
    }

    vector<long long> c(0);
    for (int j = 0; j < static_cast<int>(b.size()); j++) {
        if ((b[j] & (1LL << i)) > 0) {
            c.push_back(b[j]);
        }
    }

    if (static_cast<int>(c.size()) >= k) {
        return (1LL << i) + dfs(k, c, i - 1);
    } else {
        return dfs(k, b, i - 1);
    }
}

int main() {
    int n, k;
    cin >> n >> k;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<long long> b(0);
    for (int i = 0; i < n; i++) {
        b.push_back(a[i]);
        for (int j = i + 1; j < n; j++) {
            b.push_back(b[b.size() - 1] + a[j]);
        }
    }

    cout << dfs(k, b, 61) << endl;
}
```
