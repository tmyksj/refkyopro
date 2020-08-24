# 東京海上日動 プログラミングコンテスト2020
## C - Lamps
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, k;
    cin >> n >> k;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    for (int i = 0; i < k; i++) {
        vector<int> b(n + 1, 0);
        for (int j = 0; j < n; j++) {
            b[max(j - a[j], 0)]++;
            b[min(j + a[j] + 1, n)]--;
        }

        for (int j = 0; j < n; j++) {
            b[j + 1] += b[j];
        }

        for (int j = 0; j < n; j++) {
            a[j] = b[j];
        }

        if (*min_element(a.begin(), a.end()) == n) {
            break;
        }
    }

    for (int i = 0; i < n; i++) {
        cout << (i == 0 ? "" : " ") << a[i];
    }
    cout << endl;
}
```
