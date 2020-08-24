# AtCoder Beginner Contest 169
## E - Count Median
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> a(n), b(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i] >> b[i];
    }

    sort(a.begin(), a.end());
    sort(b.begin(), b.end());

    if (n % 2 == 0) {
        cout << (b[n / 2] + b[n / 2 - 1]) - (a[n / 2] + a[n / 2 - 1]) + 1 << endl;
    } else {
        cout << b[(n - 1) / 2] - a[(n - 1) / 2] + 1 << endl;
    }
}
```
