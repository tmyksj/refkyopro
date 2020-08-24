# M-SOLUTIONS プロコンオープン 2020
## D - Road to Millionaire
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<long long> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    long long res = 1000;
    for (int i = 0; i < n - 1; i++) {
        if (a[i] < a[i + 1]) {
            res = res / a[i] * a[i + 1] + res % a[i];
        }
    }

    cout << res << endl;
}
```
