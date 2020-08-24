# AtCoder Beginner Contest 170
## D - Not Divisible
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    sort(a.begin(), a.end());

    int res = 0;
    vector<bool> b(a[n - 1] + 1, true);
    for (int i = 0; i < n; i++) {
        if (b[a[i]]) {
            if (i == n - 1 || a[i] != a[i + 1]) {
                res++;
            }

            for (int j = a[i]; j <= a[n - 1]; j += a[i]) {
                b[j] = false;
            }
        }
    }

    cout << res << endl;
}
```
