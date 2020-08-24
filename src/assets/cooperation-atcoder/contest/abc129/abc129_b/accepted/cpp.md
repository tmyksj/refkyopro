# AtCoder Beginner Contest 129
## B - Balance
```cpp
#include <cmath>
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;
    cin >> n;

    vector<int> w(n);
    int sum = 0;
    for (int i = 0; i < n; i++) {
        cin >> w[i];
        sum += w[i];
    }

    int absmin = sum - w[0];
    for (int i = 1, l = w[0], r = sum - w[0]; i < n - 1; i++) {
        l += w[i];
        r -= w[i];
        absmin = min(absmin, abs(r - l));
    }

    cout << absmin << endl;
}
```
