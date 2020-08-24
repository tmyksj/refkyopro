# AtCoder Beginner Contest 130
## D - Enough Array
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    long long k;
    cin >> n >> k;

    vector<long long> a(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
        a[i] += a[i - 1];
    }

    long long cnt = 0;
    for (int i = 0, j = 1; i <= n; i++) {
        while (j <= n && a[j] - a[i] < k) {
            j++;
        }

        if (j > n) {
            break;
        }

        cnt += n - j + 1;
    }

    cout << cnt << endl;
}
```
