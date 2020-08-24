# AtCoder Beginner Contest 048
## C - Boxes and Candies
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n, x;
    cin >> n >> x;

    vector<int> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    long long res = 0;
    if (a[0] > x) {
        res += a[0] - x;
        a[0] = x;
    }

    for (int i = 1; i < n; i++) {
        if (a[i] > x - a[i - 1]) {
            res += a[i] - (x - a[i - 1]);
            a[i] = x - a[i - 1];
        }
    }

    cout << res << endl;
}
```
