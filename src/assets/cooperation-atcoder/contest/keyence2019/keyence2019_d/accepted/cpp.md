# キーエンス プログラミング コンテスト 2019
## D - Double Landscape
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, m;
    cin >> n >> m;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    vector<int> b(m);
    for (int i = 0; i < m; i++) {
        cin >> b[i];
    }

    sort(a.begin(), a.end(), greater<int>());
    sort(b.begin(), b.end(), greater<int>());

    long long res = 1;
    for (int i = 0, j = 0, k = 0; i < n * m; i++) {
        int dj = 0;
        while (j + dj < n && a[j + dj] == n * m - i) {
            dj++;
        }
        j += dj;

        int dk = 0;
        while (k + dk < m && b[k + dk] == n * m - i) {
            dk++;
        }
        k += dk;

        if (dj == 0 && dk == 0) {
            res *= max(j * k - i, 0);
        } else if (dj == 0 && dk == 1) {
            res *= j;
        } else if (dj == 1 && dk == 0) {
            res *= k;
        } else if (dj >= 2 || dk >= 2) {
            res = 0;
        }
        res %= 1000000007;
    }

    cout << res << endl;
}
```
