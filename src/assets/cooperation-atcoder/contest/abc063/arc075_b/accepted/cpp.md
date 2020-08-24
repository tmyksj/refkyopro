# AtCoder Beginner Contest 063
## D - Widespread
```cpp
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    long long n, a, b;
    cin >> n >> a >> b;

    vector<long long> h(n);
    for (int i = 0; i < n; i++) {
        cin >> h[i];
    }

    long long left = 0, right = 0;
    for (int i = 0; i < n; i++) {
        right = max(right, h[i]);
    }

    while (left < right) {
        long long mid = left + (right - left) / 2;

        long long cnt = 0;
        for (int i = 0; i < n; i++) {
            if (h[i] - mid * b > 0) {
                cnt += (h[i] - mid * b + a - b - 1) / (a - b);
            }
        }

        if (cnt <= mid && right == mid) {
            break;
        } else if (cnt <= mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    cout << left << endl;
}
```
