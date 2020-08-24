# AtCoder Beginner Contest 056
## C - Go Home
```cpp
#include <iostream>

using namespace std;

int main() {
    long long x;
    cin >> x;

    long long left = 0, right = 2 * x;
    while (left < right) {
        long long mid = left + (right - left) / 2;

        if (mid * (mid + 1) >= 2 * x && right == mid) {
            break;
        } else if (mid * (mid + 1) >= 2 * x) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    cout << left << endl;
}
```
