# AtCoder Beginner Contest 008
## C - コイン
```cpp
#include <iomanip>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> c(n);
    for (int i = 0; i < n; i++) {
        cin >> c[i];
    }

    double res = 0;
    for (int i = 0; i < n; i++) {
        int s = 0;
        for (int j = 0; j < n; j++) {
            if (i != j && c[i] % c[j] == 0) {
                s++;
            }
        }

        if (s % 2 == 0) {
            res += static_cast<double>(s + 2) / (2 * s + 2);
        } else {
            res += 0.5;
        }
    }

    cout << setprecision(12) << fixed << res << endl;
}
```
