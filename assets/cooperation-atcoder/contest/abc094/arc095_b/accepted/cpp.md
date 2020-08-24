# AtCoder Beginner Contest 094
## D - Binomial Coefficients
```cpp
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

    int c_n = -1, c_n_idx = -1;
    for (int i = 0; i < n; i++) {
        if (c_n_idx == -1 || c_n < a[i]) {
            c_n = a[i];
            c_n_idx = i;
        }
    }

    int c_r = -1, c_r_idx = -1;
    for (int i = 0; i < n; i++) {
        if (c_n_idx != i
                && (c_r_idx == -1
                        || min(abs(c_r - c_n / 2), abs(c_r - c_n / 2 - c_n % 2))
                                > min(abs(a[i] - c_n / 2), abs(a[i] - c_n / 2 - c_n % 2)))) {
            c_r = a[i];
            c_r_idx = i;
        }
    }

    cout << c_n << " " << c_r << endl;
}
```
