# AtCoder Beginner Contest 112
## C - Pyramid
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> x(n), y(n), h(n);
    for (int i = 0; i < n; i++) {
        cin >> x[i] >> y[i] >> h[i];
    }

    int cy = -1, cx = -1, ch = -1;
    for (int i = 0; i <= 100; i++) {
        for (int j = 0; j <= 100; j++) {
            int h_est = 1;
            for (int k = 0; k < n; k++) {
                if (h[k] > 0) {
                    h_est = abs(i - y[k]) + abs(j - x[k]) + h[k];
                    break;
                }
            }

            bool valid = true;
            for (int k = 0; k < n; k++) {
                if (max(h_est - abs(i - y[k]) - abs(j - x[k]), 0) != h[k]) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                cy = i;
                cx = j;
                ch = h_est;
            }
        }
    }

    cout << cx << " " << cy << " " << ch << endl;
}
```
