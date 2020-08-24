# AtCoder Beginner Contest 068
## D - Decrease (Contestant ver.)
```cpp
#include <iostream>

using namespace std;

int main() {
    long long k;
    cin >> k;

    int n = 50;

    cout << n << endl;
    for (int i = 0; i < n; i++) {
        if (k == 0) {
            cout << (i == 0 ? "" : " ") << i;
        } else if (i <= (k - 1) % n) {
            cout << (i == 0 ? "" : " ") << i - (k - 1) % n + n + (k - 1) / n;
        } else {
            cout << (i == 0 ? "" : " ") << i - (k - 1) % n - 1 + (k - 1) / n;
        }
    }
    cout << endl;
}
```
