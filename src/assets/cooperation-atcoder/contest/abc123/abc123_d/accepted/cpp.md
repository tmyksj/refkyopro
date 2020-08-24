# AtCoder Beginner Contest 123
## D - Cake 123
```cpp
#include <algorithm>
#include <cmath>
#include <functional>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int x, y, z, k;
    cin >> x >> y >> z >> k;

    vector<long long> a(x), b(y), c(z);
    for (int i = 0; i < x; i++) { cin >> a[i]; }
    for (int i = 0; i < y; i++) { cin >> b[i]; }
    for (int i = 0; i < z; i++) { cin >> c[i]; }

    vector<long long> ab(x * y);
    for (int i = 0; i < x; i++) {
        for (int j = 0; j < y; j++) {
            ab[i * y + j] = a[i] + b[j];
        }
    }

    sort(ab.begin(), ab.end(), greater<long long>());

    vector<long long> abc(min(x * y, k) * min(z, k));
    for (int i = 0; i < min(x * y, k); i++) {
        for (int j = 0; j < min(z, k); j++) {
            abc[i * min(z, k) + j] = ab[i] + c[j];
        }
    }

    sort(abc.begin(), abc.end(), greater<long long>());

    for (int i = 0; i < k; i++) {
        cout << abc[i] << endl;
    }
}
```
